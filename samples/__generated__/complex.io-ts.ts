import * as t from 'io-ts'

export type Complex_Base = t.TypeOf<typeof Complex_Base>
export const Complex_Base = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
  role: t.union([t.literal('admin'), t.literal('user'), t.literal('guest')])
})

export type Complex_Extended = t.TypeOf<typeof Complex_Extended>
export const Complex_Extended = t.intersection([
  Complex_Base,
  t.type({
    email: t.string,
    active: t.boolean
  })
])

export type Complex_UserType = t.TypeOf<typeof Complex_UserType>
export const Complex_UserType = t.union([
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('admin'),
      permissions: t.array(t.string)
    })
  ]),
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('user'),
      group: t.string
    })
  ]),
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('guest'),
      restrictions: t.array(t.string)
    })
  ])
])

export type Complex_WithoutAgeAndEmail = t.TypeOf<
  typeof Complex_WithoutAgeAndEmail
>
export const Complex_WithoutAgeAndEmail = t.intersection([
  t.type({
    id: t.number,
    name: t.string,
    role: t.union([t.literal('admin'), t.literal('user'), t.literal('guest')])
  }),
  t.type({
    active: t.boolean
  })
])

export type Complex_ExtractAdminAndUser = t.TypeOf<
  typeof Complex_ExtractAdminAndUser
>
export const Complex_ExtractAdminAndUser = t.union([
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('admin'),
      permissions: t.array(t.string)
    })
  ]),
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('user'),
      group: t.string
    })
  ])
])

export type Complex_ExcludeGuest = t.TypeOf<typeof Complex_ExcludeGuest>
export const Complex_ExcludeGuest = t.union([
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('admin'),
      permissions: t.array(t.string)
    })
  ]),
  t.intersection([
    Complex_Base,
    t.type({
      role: t.literal('user'),
      group: t.string
    })
  ])
])

export type Complex_Model = t.TypeOf<typeof Complex_Model>
export const Complex_Model = t.intersection([
  Complex_WithoutAgeAndEmail,
  t.type({
    extraInfo: Complex_ExtractAdminAndUser,
    filteredRoles: Complex_ExcludeGuest
  })
])
