import { z } from 'zod4'

export type Extend_BaseSubModel = z.infer<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = z.object({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type Extend_Model = z.infer<typeof Extend_Model>
export const Extend_Model = Extend_BaseSubModel.merge(
  z.object({
    id: z.string(),
    items: z.array(z.string())
  })
)
