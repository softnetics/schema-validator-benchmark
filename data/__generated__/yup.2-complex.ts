import y from 'yup'

export type BaseSubModel = y.InferType<typeof BaseSubModel>
export const BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type SubModel1 = y.InferType<typeof SubModel1>
export const SubModel1 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel1' => value === 'submodel1')
    .required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})

export type SubModel2 = y.InferType<typeof SubModel2>
export const SubModel2 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel2' => value === 'submodel2')
    .required(),
  id: y.number().required(),
  items: y.array(y.number().required())
})

export type SubModel3 = y.InferType<typeof SubModel3>
export const SubModel3 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel3' => value === 'submodel3')
    .required(),
  a: y.boolean().required(),
  items: y.array(y.boolean().required())
})
