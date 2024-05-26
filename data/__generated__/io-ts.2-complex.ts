import * as t from 'io-ts'

export type BaseSubModel = t.TypeOf<typeof BaseSubModel>
export const BaseSubModel = t.type({
  description: t.string,
  createdAt: t.string,
  updatedAt: t.string
})

export type SubModel1 = t.TypeOf<typeof SubModel1>
export const SubModel1 = t.intersection([
  BaseSubModel,
  t.type({
    type: t.literal('submodel1'),
    id: t.string,
    items: t.array(t.string)
  })
])

export type SubModel2 = t.TypeOf<typeof SubModel2>
export const SubModel2 = t.intersection([
  BaseSubModel,
  t.type({
    type: t.literal('submodel2'),
    id: t.number,
    items: t.array(t.number)
  })
])

export type SubModel3 = t.TypeOf<typeof SubModel3>
export const SubModel3 = t.intersection([
  BaseSubModel,
  t.type({
    type: t.literal('submodel3'),
    a: t.boolean,
    items: t.array(t.boolean)
  })
])
