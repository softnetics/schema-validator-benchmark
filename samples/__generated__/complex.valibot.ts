import * as v from 'valibot'

export type Complex_Base = v.InferOutput<typeof Complex_Base>
export const Complex_Base = v.object({
  id: v.number(),
  name: v.string(),
  age: v.number(),
  role: v.union([v.literal('admin'), v.literal('user'), v.literal('guest')])
})

export type Complex_Extended = v.InferOutput<typeof Complex_Extended>
export const Complex_Extended = v.intersect([
  Complex_Base,
  v.object({
    email: v.string(),
    active: v.boolean()
  })
])

export type Complex_UserType = v.InferOutput<typeof Complex_UserType>
export const Complex_UserType = v.union([
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('admin'),
      permissions: v.array(v.string())
    })
  ]),
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('user'),
      group: v.string()
    })
  ]),
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('guest'),
      restrictions: v.array(v.string())
    })
  ])
])

export type Complex_WithoutAgeAndEmail = v.InferOutput<
  typeof Complex_WithoutAgeAndEmail
>
export const Complex_WithoutAgeAndEmail = v.intersect([
  v.object({
    id: v.number(),
    name: v.string(),
    role: v.union([v.literal('admin'), v.literal('user'), v.literal('guest')])
  }),
  v.object({
    active: v.boolean()
  })
])

export type Complex_ExtractAdminAndUser = v.InferOutput<
  typeof Complex_ExtractAdminAndUser
>
export const Complex_ExtractAdminAndUser = v.union([
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('admin'),
      permissions: v.array(v.string())
    })
  ]),
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('user'),
      group: v.string()
    })
  ])
])

export type Complex_ExcludeGuest = v.InferOutput<typeof Complex_ExcludeGuest>
export const Complex_ExcludeGuest = v.union([
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('admin'),
      permissions: v.array(v.string())
    })
  ]),
  v.intersect([
    Complex_Base,
    v.object({
      role: v.literal('user'),
      group: v.string()
    })
  ])
])

export type Complex_Model = v.InferOutput<typeof Complex_Model>
export const Complex_Model = v.intersect([
  Complex_WithoutAgeAndEmail,
  v.object({
    extraInfo: Complex_ExtractAdminAndUser,
    filteredRoles: Complex_ExcludeGuest
  })
])
