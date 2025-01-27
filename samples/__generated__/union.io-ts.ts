import * as t from 'io-ts'

export type Animal = t.TypeOf<typeof Animal>
export const Animal = t.type({
  name: t.string
})

export type Mammal = t.TypeOf<typeof Mammal>
export const Mammal = t.intersection([
  Animal,
  t.type({
    type: t.literal('mammal'),
    hasFur: t.boolean
  })
])

export type Bird = t.TypeOf<typeof Bird>
export const Bird = t.intersection([
  Animal,
  t.type({
    type: t.literal('bird'),
    canFly: t.boolean
  })
])

export type Dog = t.TypeOf<typeof Dog>
export const Dog = t.intersection([
  Mammal,
  t.type({
    breed: t.literal('dog'),
    barkingLevel: t.union([
      t.literal('low'),
      t.literal('medium'),
      t.literal('high')
    ])
  })
])

export type Cat = t.TypeOf<typeof Cat>
export const Cat = t.intersection([
  Mammal,
  t.type({
    breed: t.literal('cat'),
    clawSharpness: t.union([t.literal('dull'), t.literal('sharp')])
  })
])

export type Eagle = t.TypeOf<typeof Eagle>
export const Eagle = t.intersection([
  Bird,
  t.type({
    species: t.literal('eagle'),
    wingSpan: t.number
  })
])

export type Penguin = t.TypeOf<typeof Penguin>
export const Penguin = t.intersection([
  Bird,
  t.type({
    species: t.literal('penguin'),
    swimmingSpeed: t.number
  })
])

export type Union_Model = t.TypeOf<typeof Union_Model>
export const Union_Model = t.union([Dog, Cat, Eagle, Penguin])
