import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Intersect2_BaseSubModel = ET.Type<typeof Intersect2_BaseSubModel>
export const Intersect2_BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type Intersect2_Model = ET.Type<typeof Intersect2_Model>
export const Intersect2_Model = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  id: ES.String,
  items: ES.Array(ES.String)
})
