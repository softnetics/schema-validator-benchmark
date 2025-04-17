import { z } from 'zod'

const Extend_BaseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  age: z.number().int().positive(),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
})

const Extend_AdminSchema = Extend_BaseSchema.extend({
  email: z.string().email(),
  department: z.string().min(1),
  position: z.string().min(1),
  role: z.literal('admin'),
})

const Extend_StrictAdminSchema = Extend_AdminSchema.extend({
  permissions: z.array(z.string().min(1)),
  role: z.literal('superadmin'),
})

const Extend_UserSchema = Extend_BaseSchema.extend({
  email: z.string().email(),
  isActive: z.boolean(),
  role: z.literal('user'),
})

const Extend_StrictUserSchema = Extend_UserSchema.extend({
  permissions: z.array(z.string().min(1)),
  role: z.literal('superuser'),
})

const Extend_GuestSchema = Extend_BaseSchema.extend({
  isActive: z.boolean(),
  role: z.literal('guest'),
})

export type Extend_AdminModelInput = z.infer<typeof Extend_AdminSchema>
export type Extend_StrictAdminModelInput = z.infer<typeof Extend_StrictAdminSchema>
export type Extend_UserModelInput = z.infer<typeof Extend_UserSchema>
export type Extend_StrictUserModelInput = z.infer<typeof Extend_StrictUserSchema>
export type Extend_GuestModelInput = z.infer<typeof Extend_GuestSchema>
