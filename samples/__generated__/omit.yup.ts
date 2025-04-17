import * as y from 'yup'

export type Omit_A = y.InferType<typeof Omit_A>
export const Omit_A = y.object({
  id: y.number().required(),
  name: y.string().required(),
  age: y.number().required(),
  email: y.string().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required()
})

export type Omit_B = y.InferType<typeof Omit_B>
export const Omit_B = y.object({
  id: y.number().required(),
  name: y.string().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required()
})

export type Omit_C = y.InferType<typeof Omit_C>
export const Omit_C = y.object({
  additionalProps: Omit_B,
  metadata: y.string().required(),
  timestamp: y.date().required()
})

export type Omit_D = y.InferType<typeof Omit_D>
export const Omit_D = y.object({
  additionalProps: Omit_B
})
