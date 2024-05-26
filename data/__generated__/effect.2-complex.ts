import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type BaseSubModel = ET.Type<typeof BaseSubModel>
export const BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type SubModel1 = ET.Type<typeof SubModel1>
export const SubModel1 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel1'),
  id: ES.String,
  items: ES.Array(ES.String)
})

export type SubModel2 = ET.Type<typeof SubModel2>
export const SubModel2 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel2'),
  id: ES.Number,
  items: ES.Array(ES.Number)
})

export type SubModel3 = ET.Type<typeof SubModel3>
export const SubModel3 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel3'),
  a: ES.Boolean,
  items: ES.Array(ES.Boolean)
})
