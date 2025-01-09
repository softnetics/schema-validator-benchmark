import * as y from 'yup'

export type Extend_BaseSubModel = y.InferType<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required()
})

export type Extend_SubModel1 = y.InferType<typeof Extend_SubModel1>
export const Extend_SubModel1 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel1' => value === 'submodel1')
    .required(),
  id: y.string().required(),
  items: y.array(y.string().required())
})

export type Extend_SubModel2 = y.InferType<typeof Extend_SubModel2>
export const Extend_SubModel2 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel2' => value === 'submodel2')
    .required(),
  id: y.number().required(),
  items: y.array(y.number().required())
})

export type Extend_SubModel3 = y.InferType<typeof Extend_SubModel3>
export const Extend_SubModel3 = y.object({
  description: y.string().required(),
  createdAt: y.string().required(),
  updatedAt: y.string().required(),
  type: y
    .mixed((value): value is 'submodel3' => value === 'submodel3')
    .required(),
  a: y.boolean().required(),
  items: y.array(y.boolean().required())
})

export type Extend_SubModel = y.InferType<typeof Extend_SubModel>
export const Extend_SubModel = y
  .mixed()
  .oneOf([
    Extend_SubModel1,
    Extend_SubModel2,
    Extend_SubModel3,
    y.object({
      description: y.string().required(),
      createdAt: y.string().required(),
      updatedAt: y.string().required(),
      type: y
        .mixed((value): value is 'submodel4' => value === 'submodel4')
        .required(),
      id: y.mixed((value): value is any => true).required(),
      items: y.array(y.mixed((value): value is any => true).required())
    })
  ])
  .required()

export type Extend_Model = y.InferType<typeof Extend_Model>
export const Extend_Model = y.object({
  a: y.number().required(),
  b: y.string().required(),
  c: y.boolean().required(),
  d: y.array(Extend_SubModel)
})
