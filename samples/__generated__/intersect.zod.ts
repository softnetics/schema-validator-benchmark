import { z } from 'zod'

export type Intersect_BaseSubModel = z.infer<typeof Intersect_BaseSubModel>
export const Intersect_BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Intersect_Model = z.infer<typeof Intersect_Model>
export const Intersect_Model = Intersect_BaseSubModel.merge(
  z.object({
    id: z.string(),
    items: z.array(z.string())
  })
)
