import z from 'zod'

export type BaseSubModel = z.infer<typeof BaseSubModel>
export const BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type SubModel1 = z.infer<typeof SubModel1>
export const SubModel1 = z.intersection(
  BaseSubModel,
  z.object({
    type: z.literal('submodel1'),
    id: z.string(),
    items: z.array(z.string())
  })
)

export type SubModel2 = z.infer<typeof SubModel2>
export const SubModel2 = z.intersection(
  BaseSubModel,
  z.object({
    type: z.literal('submodel2'),
    id: z.number(),
    items: z.array(z.number())
  })
)

export type SubModel3 = z.infer<typeof SubModel3>
export const SubModel3 = z.intersection(
  BaseSubModel,
  z.object({
    type: z.literal('submodel3'),
    a: z.boolean(),
    items: z.array(z.boolean())
  })
)
