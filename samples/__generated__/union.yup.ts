import * as y from 'yup'

export type Animal = y.InferType<typeof Animal>
export const Animal = y.object({
  name: y.string().required()
})

export type Mammal = y.InferType<typeof Mammal>
export const Mammal = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'mammal' => value === 'mammal').required(),
  hasFur: y.boolean().required()
})

export type Bird = y.InferType<typeof Bird>
export const Bird = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'bird' => value === 'bird').required(),
  canFly: y.boolean().required()
})

export type Dog = y.InferType<typeof Dog>
export const Dog = y.mixed(/* unsupported */)

export type Cat = y.InferType<typeof Cat>
export const Cat = y.mixed(/* unsupported */)

export type Eagle = y.InferType<typeof Eagle>
export const Eagle = y.mixed(/* unsupported */)

export type Penguin = y.InferType<typeof Penguin>
export const Penguin = y.mixed(/* unsupported */)

export type Union_Model = y.InferType<typeof Union_Model>
export const Union_Model = y
  .mixed()
  .oneOf([Dog, Cat, Eagle, Penguin])
  .required()
