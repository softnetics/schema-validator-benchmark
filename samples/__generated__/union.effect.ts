import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Dog = ET.Type<typeof Dog>
export const Dog = ES.Struct({
  name: ES.String,
  type: ES.Literal('mammal'),
  hasFur: ES.Boolean,
  breed: ES.Literal('dog'),
  barkingLevel: ES.Union(
    ES.Literal('low'),
    ES.Literal('medium'),
    ES.Literal('high')
  )
})

export type Cat = ET.Type<typeof Cat>
export const Cat = ES.Struct({
  name: ES.String,
  type: ES.Literal('mammal'),
  hasFur: ES.Boolean,
  breed: ES.Literal('cat'),
  clawSharpness: ES.Union(ES.Literal('dull'), ES.Literal('sharp'))
})

export type Eagle = ET.Type<typeof Eagle>
export const Eagle = ES.Struct({
  name: ES.String,
  type: ES.Literal('bird'),
  canFly: ES.Boolean,
  species: ES.Literal('eagle'),
  wingSpan: ES.Number
})

export type Penguin = ET.Type<typeof Penguin>
export const Penguin = ES.Struct({
  name: ES.String,
  type: ES.Literal('bird'),
  canFly: ES.Boolean,
  species: ES.Literal('penguin'),
  swimmingSpeed: ES.Number
})

export type Union_Model = ET.Type<typeof Union_Model>
export const Union_Model = ES.Union(Dog, Cat, Eagle, Penguin)
