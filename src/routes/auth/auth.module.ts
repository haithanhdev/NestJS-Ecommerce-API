import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthRepository } from 'src/routes/auth/auth.repo'
import { GoogleService } from 'src/routes/auth/google.service'
import { SharedModule } from 'src/shared/shared.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, GoogleService],
  imports: [SharedModule],
})
export class AuthModule {}
