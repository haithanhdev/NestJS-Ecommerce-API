import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import envConfig from 'src/shared/config'
import fs from 'fs'
import path from 'path'
@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }
  async sendOTP(payload: { email: string; code: string }) {
    const subject = 'Mã OTP'
    const otpTemplate = fs.readFileSync(path.resolve('src/shared/email-templates/otp.html'), {
      encoding: 'utf-8',
    })

    return await this.resend.emails.send({
      //Chưa verify domain thì để mặc định vậy
      from: 'Nest.js Ecommerce <no-reply@devhueit.io.vn>',
      to: [payload.email],
      subject: subject,
      html: otpTemplate.replaceAll('{{subject}}', subject).replaceAll('{{code}}', payload.code),
    })
  }
}
