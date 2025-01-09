import * as v from 'valibot'

export type Simple_SubModel = v.InferOutput<typeof Simple_SubModel>
export const Simple_SubModel = v.object({
  a: v.date(),
  b: v.string()
})

export type Simple_Model = v.InferOutput<typeof Simple_Model>
export const Simple_Model = v.object({
  a: v.number(),
  b: v.string(),
  c: v.boolean(),
  d: v.array(Simple_SubModel)
})
