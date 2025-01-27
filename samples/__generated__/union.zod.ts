import { z } from 'zod'

export type Animal = z.infer<typeof Animal>
export const Animal = z.object({
  name: z.string()
})

export type Mammal = z.infer<typeof Mammal>
export const Mammal = Animal.merge(
  z.object({
    type: z.literal('mammal'),
    hasFur: z.boolean()
  })
)

export type Bird = z.infer<typeof Bird>
export const Bird = Animal.merge(
  z.object({
    type: z.literal('bird'),
    canFly: z.boolean()
  })
)

export type Dog = z.infer<typeof Dog>
export const Dog = Mammal.merge(
  z.object({
    breed: z.literal('dog'),
    barkingLevel: z.union([
      z.literal('low'),
      z.literal('medium'),
      z.literal('high')
    ])
  })
)

export type Cat = z.infer<typeof Cat>
export const Cat = Mammal.merge(
  z.object({
    breed: z.literal('cat'),
    clawSharpness: z.union([z.literal('dull'), z.literal('sharp')])
  })
)

export type Eagle = z.infer<typeof Eagle>
export const Eagle = Bird.merge(
  z.object({
    species: z.literal('eagle'),
    wingSpan: z.number()
  })
)

export type Penguin = z.infer<typeof Penguin>
export const Penguin = Bird.merge(
  z.object({
    species: z.literal('penguin'),
    swimmingSpeed: z.number()
  })
)

export type Union_Model = z.infer<typeof Union_Model>
export const Union_Model = z.union([Dog, Cat, Eagle, Penguin])
