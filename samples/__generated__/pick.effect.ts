import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Pick_A = ET.Type<typeof Pick_A>
export const Pick_A = ES.Struct({
  id: ES.Number,
  name: ES.String,
  age: ES.Number,
  email: ES.String,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest'))
})

export type Pick_B = ET.Type<typeof Pick_B>
export const Pick_B = ES.Struct({
  age: ES.Number,
  email: ES.String
})

export type Pick_C = ET.Type<typeof Pick_C>
export const Pick_C = ES.Struct({
  additionalProps: Pick_B,
  metadata: ES.String,
  timestamp: ES.Union(ES.Date, ES.Null)
})

export type Pick_D = ET.Type<typeof Pick_D>
export const Pick_D = ES.Struct({
  additionalProps: Pick_B,
  timestamp: ES.Union(ES.Date, ES.Null)
})
