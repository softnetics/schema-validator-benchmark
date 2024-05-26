import * as t from 'io-ts'

const t_Date = new t.Type<Date, Date, unknown>(
  'Date',
  (value: unknown): value is Date => value instanceof Date,
  (value, context) =>
    value instanceof Date ? t.success(value) : t.failure(value, context),
  t.identity
)
export type Simple_SubModel = t.TypeOf<typeof Simple_SubModel>
export const Simple_SubModel = t.type({
  a: t_Date,
  b: t.string
})

export type Simple_Model = t.TypeOf<typeof Simple_Model>
export const Simple_Model = t.type({
  a: t.number,
  b: t.string,
  c: t.boolean,
  d: t.array(Simple_SubModel)
})
