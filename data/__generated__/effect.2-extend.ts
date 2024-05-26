import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Extend_BaseSubModel = ET.Type<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String
})

export type Extend_SubModel1 = ET.Type<typeof Extend_SubModel1>
export const Extend_SubModel1 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel1'),
  id: ES.String,
  items: ES.Array(ES.String)
})

export type Extend_SubModel2 = ET.Type<typeof Extend_SubModel2>
export const Extend_SubModel2 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel2'),
  id: ES.Number,
  items: ES.Array(ES.Number)
})

export type Extend_SubModel3 = ET.Type<typeof Extend_SubModel3>
export const Extend_SubModel3 = ES.Struct({
  description: ES.String,
  createdAt: ES.String,
  updatedAt: ES.String,
  type: ES.Literal('submodel3'),
  a: ES.Boolean,
  items: ES.Array(ES.Boolean)
})

export type Extend_SubModel = ET.Type<typeof Extend_SubModel>
export const Extend_SubModel = ES.Union(
  Extend_SubModel1,
  Extend_SubModel2,
  Extend_SubModel3,
  ES.Struct({
    description: ES.String,
    createdAt: ES.String,
    updatedAt: ES.String,
    type: ES.Literal('submodel4'),
    id: ES.Any,
    items: ES.Array(ES.Any)
  })
)

export type Extend_Model = ET.Type<typeof Extend_Model>
export const Extend_Model = ES.Struct({
  a: ES.Number,
  b: ES.String,
  c: ES.Boolean,
  d: ES.Array(Extend_SubModel)
})
