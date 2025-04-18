import { z } from 'zod4'

export type Interface_BaseSubModel1 = z.infer<typeof Interface_BaseSubModel1>
export const Interface_BaseSubModel1 = z.interface({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Interface_BaseSubModel2 = z.infer<typeof Interface_BaseSubModel2>
export const Interface_BaseSubModel2 = z.interface({
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const Interface_BaseSubModel3 = z.interface({
  name: z.string(),
  age: z.number(),
  isActive: z.boolean(),
})
export type Interface_BaseSubModel3 = z.infer<typeof Interface_BaseSubModel3>

export const Interface_BaseSubModel4 = z.interface({
  title: z.string(),
  tags: z.array(z.string()),
  published: z.boolean(),
})
export type Interface_BaseSubModel4 = z.infer<typeof Interface_BaseSubModel4>

export const Interface_BaseSubModel5 = z.interface({
  id: z.number(),
  email: z.string().email(),
  role: z.enum(['admin', 'user', 'guest']),
})
export type Interface_BaseSubModel5 = z.infer<typeof Interface_BaseSubModel5>

export const Interface_ComplexUnion = z.union([
  Interface_BaseSubModel1,
  Interface_BaseSubModel2,
  Interface_BaseSubModel3,
  Interface_BaseSubModel4,
  Interface_BaseSubModel5,
])
export type Interface_ComplexUnion = z.infer<typeof Interface_ComplexUnion>
