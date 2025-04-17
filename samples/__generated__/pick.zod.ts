import { z } from 'zod'

export type Pick_A = z.infer<typeof Pick_A>
export const Pick_A = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  email: z.string(),
  role: z.union([z.literal('admin'), z.literal('user'), z.literal('guest')])
})

export type Pick_B = z.infer<typeof Pick_B>
export const Pick_B = z.object({
  age: z.number(),
  email: z.string()
})

export type Pick_C = z.infer<typeof Pick_C>
export const Pick_C = z.object({
  additionalProps: Pick_B,
  metadata: z.string(),
  timestamp: z.union([z.date(), z.null()])
})

export type Pick_D = z.infer<typeof Pick_D>
export const Pick_D = z.object({
  additionalProps: Pick_B,
  timestamp: z.union([z.date(), z.null()])
})
