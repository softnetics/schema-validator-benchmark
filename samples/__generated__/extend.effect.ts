import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Extend_BaseSubModel = ET.Type<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type Extend_Model = ET.Type<typeof Extend_Model>
export const Extend_Model = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  id: ES.String,
  items: ES.Array(ES.String)
})
