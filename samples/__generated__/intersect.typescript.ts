export type Intersect_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}
export const Intersect_BaseSubModel = (() => {
  function check_Intersect_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Intersect_BaseSubModel {
    return check_Intersect_95_BaseSubModel(value)
  }
})()

export type Intersect_Model = Intersect_BaseSubModel & {
  id: string
  items: Array<string>
}
export const Intersect_Model = (() => {
  function check_Intersect_95_Model(value: any): boolean {
    return (
      check_Intersect_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  function check_Intersect_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Intersect_Model {
    return check_Intersect_95_Model(value)
  }
})()
