import * as y from 'yup'

export type Intersect1_BaseSubModel = y.InferType<
  typeof Intersect1_BaseSubModel
>
export const Intersect1_BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type Intersect1_BaseSubModel2 = y.InferType<
  typeof Intersect1_BaseSubModel2
>
export const Intersect1_BaseSubModel2 = y.object({
  id: y.string().required(),
  items: y.array(y.string().required())
})

export type Intersect1_Model = y.InferType<typeof Intersect1_Model>
export const Intersect1_Model = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})
