import { Type, Static, TSchema } from '@sinclair/typebox'


type Extend_BaseSubModel = Static<typeof Extend_BaseSubModel>
const Extend_BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

type Extend_SubModel1 = Static<typeof Extend_SubModel1>
const Extend_SubModel1 = Type.Intersect([
Extend_BaseSubModel,
Type.Object({
type: Type.Literal('submodel1'),
id: Type.String(),
items: Type.Array(Type.String())
})
])

type Extend_SubModel2 = Static<typeof Extend_SubModel2>
const Extend_SubModel2 = Type.Intersect([
Extend_BaseSubModel,
Type.Object({
type: Type.Literal('submodel2'),
id: Type.Number(),
items: Type.Array(Type.Number())
})
])

type Extend_SubModel3 = Static<typeof Extend_SubModel3>
const Extend_SubModel3 = Type.Intersect([
Extend_BaseSubModel,
Type.Object({
type: Type.Literal('submodel3'),
a: Type.Boolean(),
items: Type.Array(Type.Boolean())
})
])

type Extend_SubModel4<T extends TSchema> = Static<ReturnType<typeof Extend_SubModel4<T>>>
const Extend_SubModel4 = <T extends TSchema>(T: T) => Type.Intersect([
Extend_BaseSubModel,
Type.Object({
type: Type.Literal('submodel4'),
id: T,
items: Type.Array(T)
})
])

type Extend_SubModel = Static<typeof Extend_SubModel>
const Extend_SubModel = Type.Union([
Extend_SubModel1,
Extend_SubModel2,
Extend_SubModel3,
Extend_SubModel4(Type.Any())
])

export type Extend_Model = Static<typeof Extend_Model>
export const Extend_Model = Type.Object({
a: Type.Number(),
b: Type.String(),
c: Type.Boolean(),
d: Type.Array(Extend_SubModel)
})