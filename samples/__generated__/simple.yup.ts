import * as y from 'yup'

export type Simple_SubModel = y.InferType<typeof Simple_SubModel>
export const Simple_SubModel = y.object({
  a: y.date().required(),
  b: y.string().required()
})

export type Simple_Model = y.InferType<typeof Simple_Model>
export const Simple_Model = y.object({
  a: y.number().required(),
  b: y.string().required(),
  c: y.boolean().required(),
  d: y.array(Simple_SubModel)
})
