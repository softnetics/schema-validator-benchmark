import { Type, Static, TSchema } from '@sinclair/typebox'


type BaseSubModel = Static<typeof BaseSubModel>
const BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

type SubModel1 = Static<typeof SubModel1>
const SubModel1 = Type.Intersect([
BaseSubModel,
Type.Object({
type: Type.Literal('submodel1'),
id: Type.String(),
items: Type.Array(Type.String())
})
])

type SubModel2 = Static<typeof SubModel2>
const SubModel2 = Type.Intersect([
BaseSubModel,
Type.Object({
type: Type.Literal('submodel2'),
id: Type.Number(),
items: Type.Array(Type.Number())
})
])

type SubModel3 = Static<typeof SubModel3>
const SubModel3 = Type.Intersect([
BaseSubModel,
Type.Object({
type: Type.Literal('submodel3'),
a: Type.Boolean(),
items: Type.Array(Type.Boolean())
})
])

type SubModel4<T extends TSchema> = Static<ReturnType<typeof SubModel4<T>>>
const SubModel4 = <T extends TSchema>(T: T) => Type.Intersect([
BaseSubModel,
Type.Object({
type: Type.Literal('submodel4'),
id: T,
items: Type.Array(T)
})
])

export type SubModel<T extends TSchema> = Static<ReturnType<typeof SubModel<T>>>
export const SubModel = <T extends TSchema>(T: T) => Type.Union([
SubModel1,
SubModel2,
SubModel3,
SubModel4(T)
])

export type Model<T extends TSchema> = Static<ReturnType<typeof Model<T>>>
export const Model = <T extends TSchema>(T: T) => Type.Object({
a: Type.Number(),
b: Type.String(),
c: Type.Boolean(),
d: Type.Array(SubModel(T))
})