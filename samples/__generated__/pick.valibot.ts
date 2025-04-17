import * as v from 'valibot'

export type Pick_A = v.InferOutput<typeof Pick_A>
export const Pick_A = v.object({
  id: v.number(),
  name: v.string(),
  age: v.number(),
  email: v.string(),
  role: v.union([v.literal('admin'), v.literal('user'), v.literal('guest')])
})

export type Pick_B = v.InferOutput<typeof Pick_B>
export const Pick_B = v.object({
  age: v.number(),
  email: v.string()
})

export type Pick_C = v.InferOutput<typeof Pick_C>
export const Pick_C = v.object({
  additionalProps: Pick_B,
  metadata: v.string(),
  timestamp: v.union([v.date(), v.null_()])
})

export type Pick_D = v.InferOutput<typeof Pick_D>
export const Pick_D = v.object({
  additionalProps: Pick_B,
  timestamp: v.union([v.date(), v.null_()])
})
