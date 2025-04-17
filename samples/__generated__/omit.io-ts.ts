import * as t from 'io-ts'

const t_Date = new t.Type<Date, Date, unknown>(
  'Date',
  (value: unknown): value is Date => value instanceof Date,
  (value, context) =>
    value instanceof Date ? t.success(value) : t.failure(value, context),
  t.identity
)
export type Omit_A = t.TypeOf<typeof Omit_A>
export const Omit_A = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
  email: t.string,
  role: t.union([t.literal('admin'), t.literal('user'), t.literal('guest')])
})

export type Omit_B = t.TypeOf<typeof Omit_B>
export const Omit_B = t.type({
  id: t.number,
  name: t.string,
  role: t.union([t.literal('admin'), t.literal('user'), t.literal('guest')])
})

export type Omit_C = t.TypeOf<typeof Omit_C>
export const Omit_C = t.type({
  additionalProps: Omit_B,
  metadata: t.string,
  timestamp: t_Date
})

export type Omit_D = t.TypeOf<typeof Omit_D>
export const Omit_D = t.type({
  additionalProps: Omit_B
})
