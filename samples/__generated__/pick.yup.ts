import * as y from 'yup'

export type Pick_A = y.InferType<typeof Pick_A>
export const Pick_A = y.object({
  id: y.number().required(),
  name: y.string().required(),
  age: y.number().required(),
  email: y.string().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required()
})

export type Pick_B = y.InferType<typeof Pick_B>
export const Pick_B = y.object({
  age: y.number().required(),
  email: y.string().required()
})

export type Pick_C = y.InferType<typeof Pick_C>
export const Pick_C = y.object({
  additionalProps: Pick_B,
  metadata: y.string().required(),
  timestamp: y
    .mixed()
    .oneOf([
      y.date().required(),
      y
        .mixed((value): value is any => value === null)
        .required() as y.MixedSchema<null>
    ])
    .required()
})

export type Pick_D = y.InferType<typeof Pick_D>
export const Pick_D = y.object({
  additionalProps: Pick_B,
  timestamp: y
    .mixed()
    .oneOf([
      y.date().required(),
      y
        .mixed((value): value is any => value === null)
        .required() as y.MixedSchema<null>
    ])
    .required()
})
