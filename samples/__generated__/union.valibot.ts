import * as v from 'valibot'

export type Animal = v.InferOutput<typeof Animal>
export const Animal = v.object({
  name: v.string()
})

export type Mammal = v.InferOutput<typeof Mammal>
export const Mammal = v.intersect([
  Animal,
  v.object({
    type: v.literal('mammal'),
    hasFur: v.boolean()
  })
])

export type Bird = v.InferOutput<typeof Bird>
export const Bird = v.intersect([
  Animal,
  v.object({
    type: v.literal('bird'),
    canFly: v.boolean()
  })
])

export type Dog = v.InferOutput<typeof Dog>
export const Dog = v.intersect([
  Mammal,
  v.object({
    breed: v.literal('dog'),
    barkingLevel: v.union([
      v.literal('low'),
      v.literal('medium'),
      v.literal('high')
    ])
  })
])

export type Cat = v.InferOutput<typeof Cat>
export const Cat = v.intersect([
  Mammal,
  v.object({
    breed: v.literal('cat'),
    clawSharpness: v.union([v.literal('dull'), v.literal('sharp')])
  })
])

export type Eagle = v.InferOutput<typeof Eagle>
export const Eagle = v.intersect([
  Bird,
  v.object({
    species: v.literal('eagle'),
    wingSpan: v.number()
  })
])

export type Penguin = v.InferOutput<typeof Penguin>
export const Penguin = v.intersect([
  Bird,
  v.object({
    species: v.literal('penguin'),
    swimmingSpeed: v.number()
  })
])

export type Union_Model = v.InferOutput<typeof Union_Model>
export const Union_Model = v.union([Dog, Cat, Eagle, Penguin])
