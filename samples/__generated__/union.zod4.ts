import { z } from 'zod4'

export type Dog = z.infer<typeof Dog>
export const Dog = z.object({
  name: z.string(),
  type: z.literal('mammal'),
  hasFur: z.boolean(),
  breed: z.literal('dog'),
  barkingLevel: z.union([
    z.literal('low'),
    z.literal('medium'),
    z.literal('high')
  ])
})

export type Cat = z.infer<typeof Cat>
export const Cat = z.object({
  name: z.string(),
  type: z.literal('mammal'),
  hasFur: z.boolean(),
  breed: z.literal('cat'),
  clawSharpness: z.union([z.literal('dull'), z.literal('sharp')])
})

export type Eagle = z.infer<typeof Eagle>
export const Eagle = z.object({
  name: z.string(),
  type: z.literal('bird'),
  canFly: z.boolean(),
  species: z.literal('eagle'),
  wingSpan: z.number()
})

export type Penguin = z.infer<typeof Penguin>
export const Penguin = z.object({
  name: z.string(),
  type: z.literal('bird'),
  canFly: z.boolean(),
  species: z.literal('penguin'),
  swimmingSpeed: z.number()
})

export type Union_Model = z.infer<typeof Union_Model>
export const Union_Model = z.union([Dog, Cat, Eagle, Penguin])
