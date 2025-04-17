import * as v from 'valibot'

export type Intersect1_BaseSubModel = v.InferOutput<
  typeof Intersect1_BaseSubModel
>
export const Intersect1_BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type Intersect1_BaseSubModel2 = v.InferOutput<
  typeof Intersect1_BaseSubModel2
>
export const Intersect1_BaseSubModel2 = v.object({
  id: v.string(),
  items: v.array(v.string())
})

export type Intersect1_Model = v.InferOutput<typeof Intersect1_Model>
export const Intersect1_Model = v.intersect([
  Intersect1_BaseSubModel,
  Intersect1_BaseSubModel2
])
