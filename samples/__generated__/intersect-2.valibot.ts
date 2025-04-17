import * as v from 'valibot'

export type Intersect2_BaseSubModel = v.InferOutput<
  typeof Intersect2_BaseSubModel
>
export const Intersect2_BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type Intersect2_Model = v.InferOutput<typeof Intersect2_Model>
export const Intersect2_Model = v.intersect([
  Intersect2_BaseSubModel,
  v.object({
    id: v.string(),
    items: v.array(v.string())
  })
])
