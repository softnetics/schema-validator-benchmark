import * as v from 'valibot'

export type SubModel = v.InferOutput<typeof SubModel>
export const SubModel = v.object({
  a: v.date(),
  b: v.string()
})

export type Model = v.InferOutput<typeof Model>
export const Model = v.object({
  a: v.number(),
  b: v.string(),
  c: v.boolean(),
  d: v.array(SubModel)
})
