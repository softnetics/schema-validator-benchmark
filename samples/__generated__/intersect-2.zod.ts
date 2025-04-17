import { z } from 'zod'

export type Intersect2_BaseSubModel = z.infer<typeof Intersect2_BaseSubModel>
export const Intersect2_BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Intersect2_Model = z.infer<typeof Intersect2_Model>
export const Intersect2_Model = Intersect2_BaseSubModel.merge(
  z.object({
    id: z.string(),
    items: z.array(z.string())
  })
)
