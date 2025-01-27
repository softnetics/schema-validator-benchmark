import { Type, Static } from '@sinclair/typebox'


type Animal = Static<typeof Animal>
const Animal = Type.Object({
name: Type.String()
})

type Mammal = Static<typeof Mammal>
const Mammal = Type.Intersect([
Animal,
Type.Object({
type: Type.Literal('mammal'),
hasFur: Type.Boolean()
})
])

type Bird = Static<typeof Bird>
const Bird = Type.Intersect([
Animal,
Type.Object({
type: Type.Literal('bird'),
canFly: Type.Boolean()
})
])

type Dog = Static<typeof Dog>
const Dog = Type.Intersect([
Mammal,
Type.Object({
breed: Type.Literal('dog'),
barkingLevel: Type.Union([
Type.Literal('low'),
Type.Literal('medium'),
Type.Literal('high')
])
})
])

type Cat = Static<typeof Cat>
const Cat = Type.Intersect([
Mammal,
Type.Object({
breed: Type.Literal('cat'),
clawSharpness: Type.Union([
Type.Literal('dull'),
Type.Literal('sharp')
])
})
])

type Eagle = Static<typeof Eagle>
const Eagle = Type.Intersect([
Bird,
Type.Object({
species: Type.Literal('eagle'),
wingSpan: Type.Number()
})
])

type Penguin = Static<typeof Penguin>
const Penguin = Type.Intersect([
Bird,
Type.Object({
species: Type.Literal('penguin'),
swimmingSpeed: Type.Number()
})
])

export type Union_Model = Static<typeof Union_Model>
export const Union_Model = Type.Union([
Dog,
Cat,
Eagle,
Penguin
])