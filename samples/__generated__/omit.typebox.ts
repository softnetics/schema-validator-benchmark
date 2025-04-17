import { Type, Static } from '@sinclair/typebox'


type Omit_A = Static<typeof Omit_A>
const Omit_A = Type.Object({
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

type Omit_B = Static<typeof Omit_B>
const Omit_B = Type.Omit(Omit_A, Type.Union([
Type.Literal('age'),
Type.Literal('email')
]))

type Omit_C = Static<typeof Omit_C>
const Omit_C = Type.Object({
additionalProps: Omit_B,
metadata: Type.String(),
timestamp: Type.Date()
})

export type Omit_D = Static<typeof Omit_D>
export const Omit_D = Type.Omit(Omit_C, Type.Union([
Type.Literal('metadata'),
Type.Literal('timestamp')
]))