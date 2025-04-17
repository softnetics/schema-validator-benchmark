import { Type, Static } from '@sinclair/typebox'


type Intersect2_BaseSubModel = Static<typeof Intersect2_BaseSubModel>
const Intersect2_BaseSubModel = Type.Object({
description: Type.String(),
createdAt: Type.String(),
updatedAt: Type.String()
})

export type Intersect2_Model = Static<typeof Intersect2_Model>
export const Intersect2_Model = Type.Intersect([
Intersect2_BaseSubModel,
Type.Object({
id: Type.String(),
items: Type.Array(Type.String())
})
])