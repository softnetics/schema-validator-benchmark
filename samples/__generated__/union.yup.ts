import * as y from 'yup'

export type Dog = y.InferType<typeof Dog>
export const Dog = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'mammal' => value === 'mammal').required(),
  hasFur: y.boolean().required(),
  breed: y.mixed((value): value is 'dog' => value === 'dog').required(),
  barkingLevel: y.mixed().oneOf(['low', 'medium', 'high']).required()
})

export type Cat = y.InferType<typeof Cat>
export const Cat = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'mammal' => value === 'mammal').required(),
  hasFur: y.boolean().required(),
  breed: y.mixed((value): value is 'cat' => value === 'cat').required(),
  clawSharpness: y.mixed().oneOf(['dull', 'sharp']).required()
})

export type Eagle = y.InferType<typeof Eagle>
export const Eagle = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'bird' => value === 'bird').required(),
  canFly: y.boolean().required(),
  species: y.mixed((value): value is 'eagle' => value === 'eagle').required(),
  wingSpan: y.number().required()
})

export type Penguin = y.InferType<typeof Penguin>
export const Penguin = y.object({
  name: y.string().required(),
  type: y.mixed((value): value is 'bird' => value === 'bird').required(),
  canFly: y.boolean().required(),
  species: y
    .mixed((value): value is 'penguin' => value === 'penguin')
    .required(),
  swimmingSpeed: y.number().required()
})

export type Union_Model = y.InferType<typeof Union_Model>
export const Union_Model = y
  .mixed()
  .oneOf([Dog, Cat, Eagle, Penguin])
  .required()
