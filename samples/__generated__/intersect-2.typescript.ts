export type Intersect2_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}
export const Intersect2_BaseSubModel = (() => {
  function check_Intersect2_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Intersect2_BaseSubModel {
    return check_Intersect2_95_BaseSubModel(value)
  }
})()

export type Intersect2_Model = Intersect2_BaseSubModel & {
  id: string
  items: Array<string>
}
export const Intersect2_Model = (() => {
  function check_Intersect2_95_Model(value: any): boolean {
    return (
      check_Intersect2_95_BaseSubModel(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.id === 'string' &&
      Array.isArray(value.items) &&
      value.items.every((value: any) => typeof value === 'string')
    )
  }
  function check_Intersect2_95_BaseSubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.description === 'string' &&
      typeof value.createdAt === 'string' &&
      typeof value.updatedAt === 'string'
    )
  }
  return function check(value: any): value is Intersect2_Model {
    return check_Intersect2_95_Model(value)
  }
})()
