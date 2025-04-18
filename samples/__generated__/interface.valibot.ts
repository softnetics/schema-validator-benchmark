import {
  InferOutput,
  array,
  boolean,
  email,
  literal,
  number,
  object,
  pipe,
  string,
  union,
} from 'valibot'

export const Interface_BaseSubModel1 = object({
  description: string(),
  createdAt: string(),
  updatedAt: string(),
})
export type Interface_BaseSubModel1 = InferOutput<typeof Interface_BaseSubModel1>

export const Interface_BaseSubModel2 = object({
  description: string(),
  createdAt: string(),
  updatedAt: string(),
})
export type Interface_BaseSubModel2 = InferOutput<typeof Interface_BaseSubModel2>

export const Interface_BaseSubModel3 = object({
  name: string(),
  age: number(),
  isActive: boolean(),
})
export type Interface_BaseSubModel3 = InferOutput<typeof Interface_BaseSubModel3>

export const Interface_BaseSubModel4 = object({
  title: string(),
  tags: array(string()),
  published: boolean(),
})
export type Interface_BaseSubModel4 = InferOutput<typeof Interface_BaseSubModel4>

export const Interface_BaseSubModel5 = object({
  id: number(),
  email: pipe(string(), email()),
  role: union([literal('admin'), literal('user'), literal('guest')]),
})
export type Interface_BaseSubModel5 = InferOutput<typeof Interface_BaseSubModel5>

export const Interface_ComplexUnion = union([
  Interface_BaseSubModel1,
  Interface_BaseSubModel2,
  Interface_BaseSubModel3,
  Interface_BaseSubModel4,
  Interface_BaseSubModel5,
])
export type Interface_ComplexUnion = InferOutput<typeof Interface_ComplexUnion>
