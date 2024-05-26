import z from 'zod'

export type SubModel = z.infer<typeof SubModel>
export const SubModel = z.object({
  a: z.date(),
  b: z.string()
})

export type Model = z.infer<typeof Model>
export const Model = z.object({
  a: z.number(),
  b: z.string(),
  c: z.boolean(),
  d: z.array(SubModel)
})
