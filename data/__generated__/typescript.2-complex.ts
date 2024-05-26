export type BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}
export const BaseSubModel = (() => {
  function check_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is BaseSubModel {
    return check_BaseSubModel(value)
  }
})()

export type SubModel1 = BaseSubModel & {
  type: 'submodel1'
  id: string
  items: Array<string>
}
export const SubModel1 = (() => {
  function check_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_SubModel1(value: any): boolean {
    return (
      check_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel1' &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  return function check(value: any): value is SubModel1 {
    return check_SubModel1(value)
  }
})()

export type SubModel2 = BaseSubModel & {
  type: 'submodel2'
  id: number
  items: Array<number>
}
export const SubModel2 = (() => {
  function check_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_SubModel2(value: any): boolean {
    return (
      check_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel2' &&
      Number.isFinite(value.id) &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => Number.isFinite(value))
    )
  }
  return function check(value: any): value is SubModel2 {
    return check_SubModel2(value)
  }
})()

export type SubModel3 = BaseSubModel & {
  type: 'submodel3'
  a: boolean
  items: Array<boolean>
}
export const SubModel3 = (() => {
  function check_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_SubModel3(value: any): boolean {
    return (
      check_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'submodel3' &&
      typeof value.a === 'boolean' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'boolean')
    )
  }
  return function check(value: any): value is SubModel3 {
    return check_SubModel3(value)
  }
})()
