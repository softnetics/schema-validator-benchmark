import * as v from 'valibot'

export type Omit_A = v.InferOutput<typeof Omit_A>
export const Omit_A = v.object({
  id: v.number(),
  name: v.string(),
  age: v.number(),
  email: v.string(),
  role: v.union([v.literal('admin'), v.literal('user'), v.literal('guest')])
})

export type Omit_B = v.InferOutput<typeof Omit_B>
export const Omit_B = v.object({
  id: v.number(),
  name: v.string(),
  role: v.union([v.literal('admin'), v.literal('user'), v.literal('guest')])
})

export type Omit_C = v.InferOutput<typeof Omit_C>
export const Omit_C = v.object({
  additionalProps: Omit_B,
  metadata: v.string(),
  timestamp: v.date()
})

export type Omit_D = v.InferOutput<typeof Omit_D>
export const Omit_D = v.object({
  additionalProps: Omit_B
})
