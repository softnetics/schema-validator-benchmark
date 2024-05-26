import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type SubModel = ET.Type<typeof SubModel>
export const SubModel = ES.Struct({
  a: ES.Date,
  b: ES.String
})

export type Model = ET.Type<typeof Model>
export const Model = ES.Struct({
  a: ES.Number,
  b: ES.String,
  c: ES.Boolean,
  d: ES.Array(SubModel)
})
