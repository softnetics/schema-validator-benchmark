import { z } from 'zod'

export type Intersect1_BaseSubModel = z.infer<typeof Intersect1_BaseSubModel>
export const Intersect1_BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Intersect1_BaseSubModel2 = z.infer<typeof Intersect1_BaseSubModel2>
export const Intersect1_BaseSubModel2 = z.object({
  id: z.string(),
  items: z.array(z.string())
})

export type Intersect1_Model = z.infer<typeof Intersect1_Model>
export const Intersect1_Model = Intersect1_BaseSubModel.merge(
  Intersect1_BaseSubModel2
)
