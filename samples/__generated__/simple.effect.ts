import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Simple_SubModel = ET.Type<typeof Simple_SubModel>
export const Simple_SubModel = ES.Struct({
  a: ES.Date,
  b: ES.String
})

export type Simple_Model = ET.Type<typeof Simple_Model>
export const Simple_Model = ES.Struct({
  a: ES.Number,
  b: ES.String,
  c: ES.Boolean,
  d: ES.Array(Simple_SubModel)
})
