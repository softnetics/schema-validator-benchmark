import * as t from 'io-ts'

export type Dog = t.TypeOf<typeof Dog>
export const Dog = t.type({
  name: t.string,
  type: t.literal('mammal'),
  hasFur: t.boolean,
  breed: t.literal('dog'),
  barkingLevel: t.union([
    t.literal('low'),
    t.literal('medium'),
    t.literal('high')
  ])
})

export type Cat = t.TypeOf<typeof Cat>
export const Cat = t.type({
  name: t.string,
  type: t.literal('mammal'),
  hasFur: t.boolean,
  breed: t.literal('cat'),
  clawSharpness: t.union([t.literal('dull'), t.literal('sharp')])
})

export type Eagle = t.TypeOf<typeof Eagle>
export const Eagle = t.type({
  name: t.string,
  type: t.literal('bird'),
  canFly: t.boolean,
  species: t.literal('eagle'),
  wingSpan: t.number
})

export type Penguin = t.TypeOf<typeof Penguin>
export const Penguin = t.type({
  name: t.string,
  type: t.literal('bird'),
  canFly: t.boolean,
  species: t.literal('penguin'),
  swimmingSpeed: t.number
})

export type Union_Model = t.TypeOf<typeof Union_Model>
export const Union_Model = t.union([Dog, Cat, Eagle, Penguin])
