type Extend_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

type Extend_SubModel1 = Extend_BaseSubModel & {
  type: 'submodel1'
  id: string
  items: string[]
}

type Extend_SubModel2 = Extend_BaseSubModel & {
  type: 'submodel2'
  id: number
  items: number[]
}

type Extend_SubModel3 = Extend_BaseSubModel & {
  type: 'submodel3'
  a: boolean
  items: boolean[]
}

type Extend_SubModel4<T> = Extend_BaseSubModel & {
  type: 'submodel4'
  id: T
  items: T[]
}

type Extend_SubModel =
  | Extend_SubModel1
  | Extend_SubModel2
  | Extend_SubModel3
  | Extend_SubModel4<any>

export type Extend_Model = {
  a: number
  b: string
  c: boolean
  d: Extend_SubModel[]
}
