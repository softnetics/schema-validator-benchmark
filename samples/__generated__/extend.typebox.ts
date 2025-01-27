import { Type, Static } from '@sinclair/typebox'


type Extend_BaseSubModel = Static<typeof Extend_BaseSubModel>
const Extend_BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

export type Extend_Model = Static<typeof Extend_Model>
export const Extend_Model = Type.Intersect([
Extend_BaseSubModel,
Type.Object({
id: Type.String(),
items: Type.Array(Type.String())
})
])