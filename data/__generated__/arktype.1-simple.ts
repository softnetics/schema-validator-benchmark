import { scope } from 'arktype'

export const types = scope({
  SubModel: {
    a: 'Date',
    b: 'string'
  },
  Model: {
    a: 'number',
    b: 'string',
    c: 'boolean',
    d: 'SubModel[]'
  }
}).compile()

export type SubModel = typeof SubModel.infer
export const SubModel = types.SubModel
export type Model = typeof Model.infer
export const Model = types.Model
