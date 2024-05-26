import { Type, Static } from '@sinclair/typebox'


export type SubModel = Static<typeof SubModel>
export const SubModel = Type.Object({
a: Type.Date(),
b: Type.String()
})

export type Model = Static<typeof Model>
export const Model = Type.Object({
a: Type.Number(),
b: Type.String(),
c: Type.Boolean(),
d: Type.Array(SubModel)
})