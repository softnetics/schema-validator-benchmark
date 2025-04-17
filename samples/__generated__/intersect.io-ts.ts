import * as t from 'io-ts'

export type Intersect_BaseSubModel = t.TypeOf<typeof Intersect_BaseSubModel>
export const Intersect_BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type Intersect_Model = t.TypeOf<typeof Intersect_Model>
export const Intersect_Model = t.intersection([
  Intersect_BaseSubModel,
  t.type({
    id: t.string,
    items: t.array(t.string)
  })
])
