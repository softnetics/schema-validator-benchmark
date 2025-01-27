import * as t from 'io-ts'

export type Extend_BaseSubModel = t.TypeOf<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type Extend_Model = t.TypeOf<typeof Extend_Model>
export const Extend_Model = t.intersection([
  Extend_BaseSubModel,
  t.type({
    id: t.string,
    items: t.array(t.string)
  })
])
