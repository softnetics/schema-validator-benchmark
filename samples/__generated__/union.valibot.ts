import * as v from 'valibot'

export type Dog = v.InferOutput<typeof Dog>
export const Dog = v.object({
  name: v.string(),
  type: v.literal('mammal'),
  hasFur: v.boolean(),
  breed: v.literal('dog'),
  barkingLevel: v.union([
    v.literal('low'),
    v.literal('medium'),
    v.literal('high')
  ])
})

export type Cat = v.InferOutput<typeof Cat>
export const Cat = v.object({
  name: v.string(),
  type: v.literal('mammal'),
  hasFur: v.boolean(),
  breed: v.literal('cat'),
  clawSharpness: v.union([v.literal('dull'), v.literal('sharp')])
})

export type Eagle = v.InferOutput<typeof Eagle>
export const Eagle = v.object({
  name: v.string(),
  type: v.literal('bird'),
  canFly: v.boolean(),
  species: v.literal('eagle'),
  wingSpan: v.number()
})

export type Penguin = v.InferOutput<typeof Penguin>
export const Penguin = v.object({
  name: v.string(),
  type: v.literal('bird'),
  canFly: v.boolean(),
  species: v.literal('penguin'),
  swimmingSpeed: v.number()
})

export type Union_Model = v.InferOutput<typeof Union_Model>
export const Union_Model = v.union([Dog, Cat, Eagle, Penguin])
