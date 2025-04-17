import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Omit_A = ET.Type<typeof Omit_A>
export const Omit_A = ES.Struct({
  id: ES.Number,
  name: ES.String,
  age: ES.Number,
  email: ES.String,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest'))
})

export type Omit_B = ET.Type<typeof Omit_B>
export const Omit_B = ES.Struct({
  id: ES.Number,
  name: ES.String,
  role: ES.Union(ES.Literal('admin'), ES.Literal('user'), ES.Literal('guest'))
})

export type Omit_C = ET.Type<typeof Omit_C>
export const Omit_C = ES.Struct({
  additionalProps: Omit_B,
  metadata: ES.String,
  timestamp: ES.Date
})

export type Omit_D = ET.Type<typeof Omit_D>
export const Omit_D = ES.Struct({
  additionalProps: Omit_B
})
