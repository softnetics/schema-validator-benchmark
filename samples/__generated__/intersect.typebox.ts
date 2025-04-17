import { Type, Static } from '@sinclair/typebox'


type Intersect_BaseSubModel = Static<typeof Intersect_BaseSubModel>
const Intersect_BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

export type Intersect_Model = Static<typeof Intersect_Model>
export const Intersect_Model = Type.Intersect([
Intersect_BaseSubModel,
Type.Object({
id: Type.String(),
items: Type.Array(Type.String())
})
])