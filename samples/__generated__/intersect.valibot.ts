import * as v from 'valibot'

export type Intersect_BaseSubModel = v.InferOutput<
  typeof Intersect_BaseSubModel
>
export const Intersect_BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type Intersect_Model = v.InferOutput<typeof Intersect_Model>
export const Intersect_Model = v.intersect([
  Intersect_BaseSubModel,
  v.object({
    id: v.string(),
    items: v.array(v.string())
  })
])
