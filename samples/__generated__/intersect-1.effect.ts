import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Intersect1_BaseSubModel = ET.Type<typeof Intersect1_BaseSubModel>
export const Intersect1_BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type Intersect1_BaseSubModel2 = ET.Type<typeof Intersect1_BaseSubModel2>
export const Intersect1_BaseSubModel2 = ES.Struct({
  id: ES.String,
  items: ES.Array(ES.String)
})

export type Intersect1_Model = ET.Type<typeof Intersect1_Model>
export const Intersect1_Model = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  id: ES.String,
  items: ES.Array(ES.String)
})
