export type SubModel = {
  a: Date
  b: string
}
export const SubModel = (() => {
  function check_SubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.a instanceof Date &&
      Number.isFinite(value.a.getTime()) &&
      typeof value.b === 'string'
    )
  }
  return function check(value: any): value is SubModel {
    return check_SubModel(value)
  }
})()

export type Model = {
  a: number
  b: string
  c: boolean
  d: Array<SubModel>
}
export const Model = (() => {
  function check_SubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.a instanceof Date &&
      Number.isFinite(value.a.getTime()) &&
      typeof value.b === 'string'
    )
  }
  function check_Model(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.a) &&
      typeof value.b === 'string' &&
      typeof value.c === 'boolean' &&
      Array.isArray(value.d) &&
      value.d.every((value: any) => check_SubModel(value))
    )
  }
  return function check(value: any): value is Model {
    return check_Model(value)
  }
})()
