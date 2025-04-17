import * as t from 'io-ts'

export type Intersect1_BaseSubModel = t.TypeOf<typeof Intersect1_BaseSubModel>
export const Intersect1_BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type Intersect1_BaseSubModel2 = t.TypeOf<typeof Intersect1_BaseSubModel2>
export const Intersect1_BaseSubModel2 = t.type({
  id: t.string,
  items: t.array(t.string)
})

export type Intersect1_Model = t.TypeOf<typeof Intersect1_Model>
export const Intersect1_Model = t.intersection([
  Intersect1_BaseSubModel,
  Intersect1_BaseSubModel2
])
