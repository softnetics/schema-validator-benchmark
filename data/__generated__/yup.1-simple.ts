import y from 'yup'

export type SubModel = y.InferType<typeof SubModel>
export const SubModel = y.object({
  a: y.date().required(),
  b: y.string().required()
})

export type Model = y.InferType<typeof Model>
export const Model = y.object({
  a: y.number().required(),
  b: y.string().required(),
  c: y.boolean().required(),
  d: y.array(SubModel)
})
