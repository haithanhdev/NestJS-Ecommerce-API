import { UserStatus } from '@prisma/client'
import { create } from 'domain'
import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

//Không có strict thì nếu data trả về dư thì lược bỏ mà không báo lỗi
//Có strict mà data trả về bị dư thì báo lỗi liền. Tuy nhiên vẫn thêm dữ liệu vào thành công chỉ lỗi bước trả về thôi
const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string(),
  phoneNumber: z.string(),
  avatar: z.string().nullable(),
  status: z.enum([UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.BLOCKED]),
  roleId: z.number(),
  createdById: z.number().nullable(),
  updatedById: z.number().nullable(),
  deletedAt: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

const RegisterBodySchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
    name: z.string().min(1).max(100),
    confirmPassword: z.string().min(6).max(100),
    phoneNumber: z.string().min(9).max(15),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Password and confirm password must match',
        path: ['confirmPassword'],
      })
    }
  })

export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}

export class RegisterResDTO extends createZodDto(UserSchema) {}
