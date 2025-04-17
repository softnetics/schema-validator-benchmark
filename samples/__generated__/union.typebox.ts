import { Type, Static } from '@sinclair/typebox'


type Dog = Static<typeof Dog>
const Dog = Type.Object({
name: Type.String(),
type: Type.Literal('mammal'),
hasFur: Type.Boolean(),
breed: Type.Literal('dog'),
barkingLevel: Type.Union([
Type.Literal('low'),
Type.Literal('medium'),
Type.Literal('high')
])
})

type Cat = Static<typeof Cat>
const Cat = Type.Object({
name: Type.String(),
type: Type.Literal('mammal'),
hasFur: Type.Boolean(),
breed: Type.Literal('cat'),
clawSharpness: Type.Union([
Type.Literal('dull'),
Type.Literal('sharp')
])
})

type Eagle = Static<typeof Eagle>
const Eagle = Type.Object({
name: Type.String(),
type: Type.Literal('bird'),
canFly: Type.Boolean(),
species: Type.Literal('eagle'),
wingSpan: Type.Number()
})

type Penguin = Static<typeof Penguin>
const Penguin = Type.Object({
name: Type.String(),
type: Type.Literal('bird'),
canFly: Type.Boolean(),
species: Type.Literal('penguin'),
swimmingSpeed: Type.Number()
})

export type Union_Model = Static<typeof Union_Model>
export const Union_Model = Type.Union([
Dog,
Cat,
Eagle,
Penguin
])