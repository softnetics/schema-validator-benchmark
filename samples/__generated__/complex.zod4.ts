import { z } from 'zod4'

export type Complex_Base = z.infer<typeof Complex_Base>
export const Complex_Base = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  role: z.union([z.literal('admin'), z.literal('user'), z.literal('guest')])
})

export type Complex_Extended = z.infer<typeof Complex_Extended>
export const Complex_Extended = Complex_Base.extend({
  email: z.string(),
  active: z.boolean()
})

export type Complex_UserType = z.infer<typeof Complex_UserType>
export const Complex_UserType = z.union([
  Complex_Base.extend({
    role: z.literal('admin'),
    permissions: z.array(z.string())
  }),
  Complex_Base.extend({ role: z.literal('user'), group: z.string() }),
  Complex_Base.extend({
    role: z.literal('guest'),
    restrictions: z.array(z.string())
  })
])

export type Complex_WithoutAgeAndEmail = z.infer<
  typeof Complex_WithoutAgeAndEmail
>
export const Complex_WithoutAgeAndEmail = z
  .object({
    id: z.number(),
    name: z.string(),
    role: z.union([z.literal('admin'), z.literal('user'), z.literal('guest')])
  })
  .extend({ active: z.boolean() })

export type Complex_ExtractAdminAndUser = z.infer<
  typeof Complex_ExtractAdminAndUser
>
export const Complex_ExtractAdminAndUser = z.union([
  Complex_Base.extend({
    role: z.literal('admin'),
    permissions: z.array(z.string())
  }),
  Complex_Base.extend({ role: z.literal('user'), group: z.string() })
])

export type Complex_ExcludeGuest = z.infer<typeof Complex_ExcludeGuest>
export const Complex_ExcludeGuest = z.union([
  Complex_Base.extend({
    role: z.literal('admin'),
    permissions: z.array(z.string())
  }),
  Complex_Base.extend({ role: z.literal('user'), group: z.string() })
])

export type Complex_Model = z.infer<typeof Complex_Model>
export const Complex_Model = Complex_WithoutAgeAndEmail.extend({
  extraInfo: Complex_ExtractAdminAndUser,
  filteredRoles: Complex_ExcludeGuest
})
