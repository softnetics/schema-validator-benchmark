import * as y from 'yup'

export type Intersect2_BaseSubModel = y.InferType<
  typeof Intersect2_BaseSubModel
>
export const Intersect2_BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type Intersect2_Model = y.InferType<typeof Intersect2_Model>
export const Intersect2_Model = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})
