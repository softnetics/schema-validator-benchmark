import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Complex_Base = ET.Type<typeof Complex_Base>
export const Complex_Base = ES.Struct({
  id: ES.Number,
  name: ES.String,
  age: ES.Number,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest'))
})

export type Complex_Extended = ET.Type<typeof Complex_Extended>
export const Complex_Extended = ES.Struct({
  id: ES.Number,
  name: ES.String,
  age: ES.Number,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest')),
  email: ES.String,
  active: ES.Boolean
})

export type Complex_UserType = ET.Type<typeof Complex_UserType>
export const Complex_UserType = ES.Union(
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    permissions: ES.Array(ES.String)
  }),
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    group: ES.String
  }),
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    restrictions: ES.Array(ES.String)
  })
)

export type Complex_WithoutAgeAndEmail = ET.Type<
  typeof Complex_WithoutAgeAndEmail
>
export const Complex_WithoutAgeAndEmail = ES.Struct({
  id: ES.Number,
  name: ES.String,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest')),
  active: ES.Boolean
})

export type Complex_ExtractAdminAndUser = ET.Type<
  typeof Complex_ExtractAdminAndUser
>
export const Complex_ExtractAdminAndUser = ES.Union(
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    permissions: ES.Array(ES.String)
  }),
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    group: ES.String
  })
)

export type Complex_ExcludeGuest = ET.Type<typeof Complex_ExcludeGuest>
export const Complex_ExcludeGuest = ES.Union(
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    permissions: ES.Array(ES.String)
  }),
  ES.Struct({
    id: ES.Number,
    name: ES.String,
    age: ES.Number,
    role: ES.Struct({}),
    group: ES.String
  })
)

export type Complex_Model = ET.Type<typeof Complex_Model>
export const Complex_Model = ES.Struct({
  id: ES.Number,
  name: ES.String,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest')),
  active: ES.Boolean,
  extraInfo: Complex_ExtractAdminAndUser,
  filteredRoles: Complex_ExcludeGuest
})
