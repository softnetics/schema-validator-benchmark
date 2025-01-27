import { Type, Static } from '@sinclair/typebox'


type Complex_Base = Static<typeof Complex_Base>
const Complex_Base = Type.Object({
id: Type.Number(),
name: Type.String(),
age: Type.Number(),
role: Type.Union([
Type.Literal('admin'),
Type.Literal('user'),
Type.Literal('guest')
])
})

type Complex_Extended = Static<typeof Complex_Extended>
const Complex_Extended = Type.Intersect([
Complex_Base,
Type.Object({
email: Type.String(),
active: Type.Boolean()
})
])

type Complex_UserType = Static<typeof Complex_UserType>
const Complex_UserType = Type.Union([
Type.Intersect([
Complex_Base,
Type.Object({
role: Type.Literal('admin'),
permissions: Type.Array(Type.String())
})
]),
Type.Intersect([
Complex_Base,
Type.Object({
role: Type.Literal('user'),
group: Type.String()
})
]),
Type.Intersect([
Complex_Base,
Type.Object({
role: Type.Literal('guest'),
restrictions: Type.Array(Type.String())
})
])
])

type Complex_WithoutAgeAndEmail = Static<typeof Complex_WithoutAgeAndEmail>
const Complex_WithoutAgeAndEmail = Type.Omit(Complex_Extended, Type.Union([
Type.Literal('age'),
Type.Literal('email')
]))

type Complex_ExtractAdminAndUser = Static<typeof Complex_ExtractAdminAndUser>
const Complex_ExtractAdminAndUser = Type.Extract(Complex_UserType, Type.Object({
role: Type.Union([
Type.Literal('admin'),
Type.Literal('user')
])
}))

type Complex_ExcludeGuest = Static<typeof Complex_ExcludeGuest>
const Complex_ExcludeGuest = Type.Exclude(Complex_UserType, Type.Object({
role: Type.Literal('guest')
}))

export type Complex_Model = Static<typeof Complex_Model>
export const Complex_Model = Type.Intersect([
Complex_WithoutAgeAndEmail,
Type.Object({
extraInfo: Complex_ExtractAdminAndUser,
filteredRoles: Complex_ExcludeGuest
})
])