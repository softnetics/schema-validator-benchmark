import * as y from 'yup'

export type Intersect_BaseSubModel = y.InferType<typeof Intersect_BaseSubModel>
export const Intersect_BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type Intersect_Model = y.InferType<typeof Intersect_Model>
export const Intersect_Model = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})
