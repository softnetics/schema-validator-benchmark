export type Intersect1_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}
export const Intersect1_BaseSubModel = (() => {
  function check_Intersect1_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Intersect1_BaseSubModel {
    return check_Intersect1_95_BaseSubModel(value)
  }
})()

export type Intersect1_BaseSubModel2 = {
  id: string
  items: Array<string>
}
export const Intersect1_BaseSubModel2 = (() => {
  function check_Intersect1_95_BaseSubModel2(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  return function check(value: any): value is Intersect1_BaseSubModel2 {
    return check_Intersect1_95_BaseSubModel2(value)
  }
})()

export type Intersect1_Model = Intersect1_BaseSubModel &
  Intersect1_BaseSubModel2
export const Intersect1_Model = (() => {
  function check_Intersect1_95_Model(value: any): boolean {
    return (
      check_Intersect1_95_BaseSubModel(value) &&
      check_Intersect1_95_BaseSubModel2(value)
    )
  }
  function check_Intersect1_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  function check_Intersect1_95_BaseSubModel2(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  return function check(value: any): value is Intersect1_Model {
    return check_Intersect1_95_Model(value)
  }
})()
