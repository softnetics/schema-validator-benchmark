import { pipe } from 'valibot'
import { minValue } from 'valibot'
import { email } from 'valibot'
import { union } from 'valibot'
import { minLength } from 'valibot'
import { InferOutput } from 'valibot'
import { array, boolean, literal, number, object, string, uuid } from 'valibot'

const Extend_BaseSchema = object({
  id: pipe(string(), uuid()),
  name: pipe(string(), minLength(1)),
  age: pipe(number(), minValue(1)),
  level: union([literal('beginner'), literal('intermediate'), literal('advanced')]),
})

const Extend_AdminSchema = object({
  ...Extend_BaseSchema.entries,
  email: pipe(string(), email()),
  department: pipe(string(), minLength(1)),
  position: pipe(string(), minLength(1)),
  role: literal('admin'),
})

const Extend_StrictAdminSchema = object({
  ...Extend_AdminSchema.entries,
  permissions: array(pipe(string(), minLength(1))),
  role: literal('superadmin'),
})

const Extend_UserSchema = object({
  ...Extend_BaseSchema.entries,
  email: pipe(string(), email()),
  isActive: boolean(),
  role: literal('user'),
})

const Extend_StrictUserSchema = object({
  ...Extend_UserSchema.entries,
  permissions: array(pipe(string(), minLength(1))),
  role: literal('superuser'),
})

const Extend_GuestSchema = object({
  ...Extend_BaseSchema.entries,
  isActive: boolean(),
  role: literal('guest'),
})

export type Extend_AdminModelInput = InferOutput<typeof Extend_AdminSchema>
export type Extend_StrictAdminModelInput = InferOutput<typeof Extend_StrictAdminSchema>
export type Extend_UserModelInput = InferOutput<typeof Extend_UserSchema>
export type Extend_StrictUserModelInput = InferOutput<typeof Extend_StrictUserSchema>
export type Extend_GuestModelInput = InferOutput<typeof Extend_GuestSchema>
