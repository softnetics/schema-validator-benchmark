type BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

type SubModel1 = BaseSubModel & {
  type: 'submodel1'
  id: string
  items: string[]
}

type SubModel2 = BaseSubModel & {
  type: 'submodel2'
  id: number
  items: number[]
}

type SubModel3 = BaseSubModel & {
  type: 'submodel3'
  a: boolean
  items: boolean[]
}

type SubModel4<T> = BaseSubModel & {
  type: 'submodel4'
  id: T
  items: T[]
}

export type SubModel<T> = SubModel1 | SubModel2 | SubModel3 | SubModel4<T>

export type Model<T> = {
  a: number
  b: string
  c: boolean
  d: SubModel<T>[]
}
