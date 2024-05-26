import { z } from 'zod'

export type Extend_BaseSubModel = z.infer<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Extend_SubModel1 = z.infer<typeof Extend_SubModel1>
export const Extend_SubModel1 = z.intersection(
  Extend_BaseSubModel,
  z.object({
    type: z.literal('submodel1'),
    id: z.string(),
    items: z.array(z.string())
  })
)

export type Extend_SubModel2 = z.infer<typeof Extend_SubModel2>
export const Extend_SubModel2 = z.intersection(
  Extend_BaseSubModel,
  z.object({
    type: z.literal('submodel2'),
    id: z.number(),
    items: z.array(z.number())
  })
)

export type Extend_SubModel3 = z.infer<typeof Extend_SubModel3>
export const Extend_SubModel3 = z.intersection(
  Extend_BaseSubModel,
  z.object({
    type: z.literal('submodel3'),
    a: z.boolean(),
    items: z.array(z.boolean())
  })
)

export type Extend_SubModel = z.infer<typeof Extend_SubModel>
export const Extend_SubModel = z.union([
  Extend_SubModel1,
  Extend_SubModel2,
  Extend_SubModel3,
  z.intersection(
    Extend_BaseSubModel,
    z.object({
      type: z.literal('submodel4'),
      id: z.any(),
      items: z.array(z.any())
    })
  )
])

export type Extend_Model = z.infer<typeof Extend_Model>
export const Extend_Model = z.object({
  a: z.number(),
  b: z.string(),
  c: z.boolean(),
  d: z.array(Extend_SubModel)
})
