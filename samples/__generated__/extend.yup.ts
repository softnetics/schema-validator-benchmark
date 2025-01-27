import * as y from 'yup'

export type Extend_BaseSubModel = y.InferType<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type Extend_Model = y.InferType<typeof Extend_Model>
export const Extend_Model = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})
