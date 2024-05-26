import * as v from 'valibot'

export type BaseSubModel = v.InferOutput<typeof BaseSubModel>
export const BaseSubModel = v.object({
  description: v.string(),
  createdAt: v.string(),
  updatedAt: v.string()
})

export type SubModel1 = v.InferOutput<typeof SubModel1>
export const SubModel1 = v.intersect([
  BaseSubModel,
  v.object({
    type: v.literal('submodel1'),
    id: v.string(),
    items: v.array(v.string())
  })
])

export type SubModel2 = v.InferOutput<typeof SubModel2>
export const SubModel2 = v.intersect([
  BaseSubModel,
  v.object({
    type: v.literal('submodel2'),
    id: v.number(),
    items: v.array(v.number())
  })
])

export type SubModel3 = v.InferOutput<typeof SubModel3>
export const SubModel3 = v.intersect([
  BaseSubModel,
  v.object({
    type: v.literal('submodel3'),
    a: v.boolean(),
    items: v.array(v.boolean())
  })
])
