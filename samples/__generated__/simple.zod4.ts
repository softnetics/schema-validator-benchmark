import { z } from 'zod4'

export type Simple_SubModel = z.infer<typeof Simple_SubModel>
export const Simple_SubModel = z.object({
  a: z.date(),
  b: z.string()
})

export type Simple_Model = z.infer<typeof Simple_Model>
export const Simple_Model = z.object({
  a: z.number(),
  b: z.string(),
  c: z.boolean(),
  d: z.array(Simple_SubModel)
})
