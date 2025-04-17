import { Type, Static } from '@sinclair/typebox'


type Pick_A = Static<typeof Pick_A>
const Pick_A = Type.Object({
id: Type.Number(),
name: Type.String(),
age: Type.Number(),
email: Type.String(),
role: Type.Union([
Type.Literal('admin'),
Type.Literal('user'),
Type.Literal('guest')
])
})

type Pick_B = Static<typeof Pick_B>
const Pick_B = Type.Pick(Pick_A, Type.Union([
Type.Literal('age'),
Type.Literal('email')
]))

type Pick_C = Static<typeof Pick_C>
const Pick_C = Type.Object({
additionalProps: Pick_B,
metadata: Type.String(),
timestamp: Type.Union([
Type.Date(),
Type.Null()
])
})

export type Pick_D = Static<typeof Pick_D>
export const Pick_D = Type.Pick(Pick_C, Type.Union([
Type.Literal('additionalProps'),
Type.Literal('timestamp')
]))