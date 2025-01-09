import * as t from 'io-ts'

export type Extend_BaseSubModel = t.TypeOf<typeof Extend_BaseSubModel>
export const Extend_BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type Extend_SubModel1 = t.TypeOf<typeof Extend_SubModel1>
export const Extend_SubModel1 = t.intersection([
  Extend_BaseSubModel,
  t.type({
    type: t.literal('submodel1'),
    id: t.string,
    items: t.array(t.string)
  })
])

export type Extend_SubModel2 = t.TypeOf<typeof Extend_SubModel2>
export const Extend_SubModel2 = t.intersection([
  Extend_BaseSubModel,
  t.type({
    type: t.literal('submodel2'),
    id: t.number,
    items: t.array(t.number)
  })
])

export type Extend_SubModel3 = t.TypeOf<typeof Extend_SubModel3>
export const Extend_SubModel3 = t.intersection([
  Extend_BaseSubModel,
  t.type({
    type: t.literal('submodel3'),
    a: t.boolean,
    items: t.array(t.boolean)
  })
])

export type Extend_SubModel = t.TypeOf<typeof Extend_SubModel>
export const Extend_SubModel = t.union([
  Extend_SubModel1,
  Extend_SubModel2,
  Extend_SubModel3,
  t.intersection([
    Extend_BaseSubModel,
    t.type({
      type: t.literal('submodel4'),
      id: t.any,
      items: t.array(t.any)
    })
  ])
])

export type Extend_Model = t.TypeOf<typeof Extend_Model>
export const Extend_Model = t.type({
  a: t.number,
  b: t.string,
  c: t.boolean,
  d: t.array(Extend_SubModel)
})
