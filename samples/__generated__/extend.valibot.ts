import * as v from 'valibot'

export type Extend_BaseSubModel = v.InferOutput<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type Extend_SubModel1 = v.InferOutput<typeof Extend_SubModel1>
export const Extend_SubModel1 = v.intersect([
  Extend_BaseSubModel,
  v.object({
    type: v.literal('submodel1'),
    id: v.string(),
    items: v.array(v.string())
  })
])

export type Extend_SubModel2 = v.InferOutput<typeof Extend_SubModel2>
export const Extend_SubModel2 = v.intersect([
  Extend_BaseSubModel,
  v.object({
    type: v.literal('submodel2'),
    id: v.number(),
    items: v.array(v.number())
  })
])

export type Extend_SubModel3 = v.InferOutput<typeof Extend_SubModel3>
export const Extend_SubModel3 = v.intersect([
  Extend_BaseSubModel,
  v.object({
    type: v.literal('submodel3'),
    a: v.boolean(),
    items: v.array(v.boolean())
  })
])

export type Extend_SubModel = v.InferOutput<typeof Extend_SubModel>
export const Extend_SubModel = v.union([
  Extend_SubModel1,
  Extend_SubModel2,
  Extend_SubModel3,
  v.intersect([
    Extend_BaseSubModel,
    v.object({
      type: v.literal('submodel4'),
      id: v.any(),
      items: v.array(v.any())
    })
  ])
])

export type Extend_Model = v.InferOutput<typeof Extend_Model>
export const Extend_Model = v.object({
  a: v.number(),
  b: v.string(),
  c: v.boolean(),
  d: v.array(Extend_SubModel)
})
