import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import envConfig from 'src/shared/config'

@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }
  async sendOTP(payload: { email: string; code: string }) {
    return await this.resend.emails.send({
      //Chưa verify domain thì để mặc định vậy
      from: 'Ecommerce admin <onboarding@resend.dev>',
      to: ['edu.haithanh.nguyen1001@gmail.com'],
      subject: `Mã OTP`,
      html: `<strong>${payload.code}</strong>`,
    })
  }
}
