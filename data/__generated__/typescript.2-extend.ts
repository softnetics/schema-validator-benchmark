export type Extend_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}
export const Extend_BaseSubModel = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Extend_BaseSubModel {
    return check_Extend_95_BaseSubModel(value)
  }
})()

export type Extend_SubModel1 = Extend_BaseSubModel & {
  type: 'submodel1'
  id: string
  items: Array<string>
}
export const Extend_SubModel1 = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Extend_95_SubModel1(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel1' &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  return function check(value: any): value is Extend_SubModel1 {
    return check_Extend_95_SubModel1(value)
  }
})()

export type Extend_SubModel2 = Extend_BaseSubModel & {
  type: 'submodel2'
  id: number
  items: Array<number>
}
export const Extend_SubModel2 = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Extend_95_SubModel2(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel2' &&
      Number.isFinite(value.id) &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => Number.isFinite(value))
    )
  }
  return function check(value: any): value is Extend_SubModel2 {
    return check_Extend_95_SubModel2(value)
  }
})()

export type Extend_SubModel3 = Extend_BaseSubModel & {
  type: 'submodel3'
  a: boolean
  items: Array<boolean>
}
export const Extend_SubModel3 = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Extend_95_SubModel3(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel3' &&
      typeof value.a === 'boolean' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'boolean')
    )
  }
  return function check(value: any): value is Extend_SubModel3 {
    return check_Extend_95_SubModel3(value)
  }
})()

export type Extend_SubModel =
  | Extend_SubModel1
  | Extend_SubModel2
  | Extend_SubModel3
  | (Extend_BaseSubModel & {
      type: 'submodel4'
      id: any
      items: Array<any>
    })
export const Extend_SubModel = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Extend_95_SubModel1(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel1' &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  function check_Extend_95_SubModel2(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel2' &&
      Number.isFinite(value.id) &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => Number.isFinite(value))
    )
  }
  function check_Extend_95_SubModel3(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel3' &&
      typeof value.a === 'boolean' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'boolean')
    )
  }
  function check_Extend_95_SubModel4(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel4' &&
      true &&
      'id' in value &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => true)
    )
  }
  function check_Extend_95_SubModel(value: any): boolean {
    return (
      check_Extend_95_SubModel1(value) ||
      check_Extend_95_SubModel2(value) ||
      check_Extend_95_SubModel3(value) ||
      check_Extend_95_SubModel4(value)
    )
  }
  return function check(value: any): value is Extend_SubModel {
    return check_Extend_95_SubModel(value)
  }
})()

export type Extend_Model = {
  a: number
  b: string
  c: boolean
  d: Array<Extend_SubModel>
}
export const Extend_Model = (() => {
  function check_Extend_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Extend_95_SubModel1(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel1' &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  function check_Extend_95_SubModel2(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel2' &&
      Number.isFinite(value.id) &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => Number.isFinite(value))
    )
  }
  function check_Extend_95_SubModel3(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel3' &&
      typeof value.a === 'boolean' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'boolean')
    )
  }
  function check_Extend_95_SubModel4(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel4' &&
      true &&
      'id' in value &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => true)
    )
  }
  function check_Extend_95_SubModel(value: any): boolean {
    return (
      check_Extend_95_SubModel1(value) ||
      check_Extend_95_SubModel2(value) ||
      check_Extend_95_SubModel3(value) ||
      check_Extend_95_SubModel4(value)
    )
  }
  function check_Extend_95_Model(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.a) &&
      typeof value.b === 'string' &&
      typeof value.c === 'boolean' &&
      Array.isArray(value.d) &&
      value.d.every((value: any) => check_Extend_95_SubModel(value))
    )
  }
  return function check(value: any): value is Extend_Model {
    return check_Extend_95_Model(value)
  }
})()
