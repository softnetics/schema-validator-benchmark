import * as t from 'io-ts'

const t_Date = new t.Type<Date, Date, unknown>(
  'Date',
  (value: unknown): value is Date => value instanceof Date,
  (value, context) =>
    value instanceof Date ? t.success(value) : t.failure(value, context),
  t.identity
)
export type Pick_A = t.TypeOf<typeof Pick_A>
export const Pick_A = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
  email: t.string,
  role: t.union([t.literal('admin'), t.literal('user'), t.literal('guest')])
})

export type Pick_B = t.TypeOf<typeof Pick_B>
export const Pick_B = t.type({
  age: t.number,
  email: t.string
})

export type Pick_C = t.TypeOf<typeof Pick_C>
export const Pick_C = t.type({
  additionalProps: Pick_B,
  metadata: t.string,
  timestamp: t.union([t_Date, t.null])
})

export type Pick_D = t.TypeOf<typeof Pick_D>
export const Pick_D = t.type({
  additionalProps: Pick_B,
  timestamp: t.union([t_Date, t.null])
})
