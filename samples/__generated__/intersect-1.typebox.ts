import { Type, Static } from '@sinclair/typebox'


type Intersect1_BaseSubModel = Static<typeof Intersect1_BaseSubModel>
const Intersect1_BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

type Intersect1_BaseSubModel2 = Static<typeof Intersect1_BaseSubModel2>
const Intersect1_BaseSubModel2 = Type.Object({
id: Type.String(),
items: Type.Array(Type.String())
})

export type Intersect1_Model = Static<typeof Intersect1_Model>
export const Intersect1_Model = Type.Intersect([
Intersect1_BaseSubModel,
Intersect1_BaseSubModel2
])