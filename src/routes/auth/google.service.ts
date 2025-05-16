import { Injectable } from '@nestjs/common'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis'
import { GetAuthorizationUrlResType, GoogleAuthStateType, LoginResType } from 'src/routes/auth/auth.model'
import { AuthRepository } from 'src/routes/auth/auth.repo'
import { AuthService } from 'src/routes/auth/auth.service'
import { GoogleUserInfoError } from 'src/routes/auth/auth.error'
import envConfig from 'src/shared/config'
import { HashingService } from 'src/shared/services/hashing.service'
import { v4 as uuidv4 } from 'uuid'
import { SharedRoleRepository } from 'src/shared/repositories/shared-role.repo'
@Injectable()
export class GoogleService {
  private oauth2Client: OAuth2Client
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly hashingService: HashingService,
    private readonly sharedRoleRepository: SharedRoleRepository,
    private readonly authService: AuthService,
  ) {
    this.oauth2Client = new google.auth.OAuth2(
      envConfig.GOOGLE_CLIENT_ID,
      envConfig.GOOGLE_CLIENT_SECRET,
      envConfig.GOOGLE_REDIRECT_URI,
    )
  }
  getAuthorizationUrl({ userAgent, ip }: GoogleAuthStateType): GetAuthorizationUrlResType {
    //Pham vi truy cap vao tai khoan google cua user
    const scope = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    //Chuyen object sang string base64 de an toan bo len url
    const stateString = Buffer.from(
      JSON.stringify({
        userAgent,
        ip,
      }),
    ).toString('base64')
    //Tao url bang thu vien oauth2Client
    const url = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope,
      include_granted_scopes: true,
      state: stateString,
    })
    return { url }
  }
  async googleCallback({ code, state }: { code: string; state: string }): Promise<LoginResType> {
    try {
      let userAgent = 'Unknown'
      let ip = 'Unknown'
      //Chua chac url callback cua google da chinh xac cho nen phai try catch
      //1. Lay state tu url
      try {
        if (state) {
          const clientInfo = JSON.parse(Buffer.from(state, 'base64').toString()) as GoogleAuthStateType
          userAgent = clientInfo.userAgent
          ip = clientInfo.ip
        }
      } catch (error) {
        console.error('Error parsing state:', error)
      }
      //2. Dung code de lay token
      const { tokens } = await this.oauth2Client.getToken(code)
      this.oauth2Client.setCredentials(tokens)
      //3. Lay thong tin user
      const oauth2 = google.oauth2({ version: 'v2', auth: this.oauth2Client })
      const { data } = await oauth2.userinfo.get()
      if (!data.email) {
        throw GoogleUserInfoError
      }
      let user = await this.authRepository.findUniqueUserIncludeRole({ email: data.email })
      //Neu khong co user thi tuc la nguoi moi
      if (!user) {
        const clientRoleId = await this.sharedRoleRepository.getClientRoleId()
        const randomPassword = uuidv4()
        const hashedPassword = await this.hashingService.hash(randomPassword)
        user = await this.authRepository.createUserIncludeRole({
          email: data.email,
          name: data.name ?? `user${uuidv4()}`,
          phoneNumber: '',
          password: hashedPassword,
          roleId: clientRoleId,
          avatar: data.picture ?? '',
        })
      }
      //Tao record device moi
      const device = await this.authRepository.createDevice({
        userId: user.id,
        userAgent,
        ip,
      })
      //Tao tokens
      const authTokens = await this.authService.generateTokens({
        userId: user.id,
        deviceId: device.id,
        roleId: user.roleId,
        roleName: user.role.name,
      })
      return {
        message: 'Login with google successfully',
        data: {
          accessToken: authTokens.accessToken,
          refreshToken: authTokens.refreshToken,
          user,
        },
      }
    } catch (error) {
      console.error(`Google callback error: ${error}`)
      throw error
    }
  }
}
