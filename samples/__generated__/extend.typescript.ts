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

export type Extend_Model = Extend_BaseSubModel & {
  id: string
  items: Array<string>
}
export const Extend_Model = (() => {
  function check_Extend_95_Model(value: any): boolean {
    return (
      check_Extend_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
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
  return function check(value: any): value is Extend_Model {
    return check_Extend_95_Model(value)
  }
})()
