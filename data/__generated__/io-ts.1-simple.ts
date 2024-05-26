import * as t from 'io-ts'

const t_Date = new t.Type<Date, Date, unknown>(
  'Date',
  (value: unknown): value is Date => value instanceof Date,
  (value, context) =>
    value instanceof Date ? t.success(value) : t.failure(value, context),
  t.identity
)

export type SubModel = t.TypeOf<typeof SubModel>
export const SubModel = t.type({
  a: t_Date,
  b: t.string
})

export type Model = t.TypeOf<typeof Model>
export const Model = t.type({
  a: t.number,
  b: t.string,
  c: t.boolean,
  d: t.array(SubModel)
})
