import * as v from 'valibot'

export type Extend_BaseSubModel = v.InferOutput<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type Extend_Model = v.InferOutput<typeof Extend_Model>
export const Extend_Model = v.intersect([
  Extend_BaseSubModel,
  v.object({
    id: v.string(),
    items: v.array(v.string())
  })
])
