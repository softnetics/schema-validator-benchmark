import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Intersect_BaseSubModel = ET.Type<typeof Intersect_BaseSubModel>
export const Intersect_BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type Intersect_Model = ET.Type<typeof Intersect_Model>
export const Intersect_Model = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  id: ES.String,
  items: ES.Array(ES.String)
})
