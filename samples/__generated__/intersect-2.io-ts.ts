import * as t from 'io-ts'

export type Intersect2_BaseSubModel = t.TypeOf<typeof Intersect2_BaseSubModel>
export const Intersect2_BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type Intersect2_Model = t.TypeOf<typeof Intersect2_Model>
export const Intersect2_Model = t.intersection([
  Intersect2_BaseSubModel,
  t.type({
    id: t.string,
    items: t.array(t.string)
  })
])
