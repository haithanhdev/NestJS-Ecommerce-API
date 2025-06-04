import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import envConfig from 'src/shared/config'
import * as React from 'react'
import { OTPEmail } from 'src/emails/otp'
import { render } from '@react-email/render'

@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }
  async sendOTP(payload: { email: string; code: string }) {
    const subject = 'Mã OTP'
    //Sử dụng cho mọi SDK gửi email không hỗ trợ react
    // const html = await render(<OTPEmail otpCode={payload.code} title={subject} />)
    // console.log(html)

    return await this.resend.emails.send({
      //Chưa verify domain thì để mặc định vậy
      from: 'Nest.js Ecommerce <no-reply@devhueit.io.vn>',
      to: [payload.email],
      subject: subject,
      react: <OTPEmail otpCode={payload.code} title={subject} />,
      // html: html,
    })
  }
}
