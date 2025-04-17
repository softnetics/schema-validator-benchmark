import { z } from 'zod'

export type Omit_A = z.infer<typeof Omit_A>
export const Omit_A = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  email: z.string(),
  role: z.union([z.literal('admin'), z.literal('user'), z.literal('guest')])
})

export type Omit_B = z.infer<typeof Omit_B>
export const Omit_B = z.object({
  id: z.number(),
  name: z.string(),
  role: z.union([z.literal('admin'), z.literal('user'), z.literal('guest')])
})

export type Omit_C = z.infer<typeof Omit_C>
export const Omit_C = z.object({
  additionalProps: Omit_B,
  metadata: z.string(),
  timestamp: z.date()
})

export type Omit_D = z.infer<typeof Omit_D>
export const Omit_D = z.object({
  additionalProps: Omit_B
})
