export type Simple_SubModel = {
  a: Date
  b: string
}
export const Simple_SubModel = (() => {
  function check_Simple_95_SubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.a instanceof Date &&
      Number.isFinite(value.a.getTime()) &&
      typeof value.b === 'string'
    )
  }
  return function check(value: any): value is Simple_SubModel {
    return check_Simple_95_SubModel(value)
  }
})()

export type Simple_Model = {
  a: number
  b: string
  c: boolean
  d: Array<Simple_SubModel>
}
export const Simple_Model = (() => {
  function check_Simple_95_SubModel(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.a instanceof Date &&
      Number.isFinite(value.a.getTime()) &&
      typeof value.b === 'string'
    )
  }
  function check_Simple_95_Model(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.a) &&
      typeof value.b === 'string' &&
      typeof value.c === 'boolean' &&
      Array.isArray(value.d) &&
      value.d.every((value: any) => check_Simple_95_SubModel(value))
    )
  }
  return function check(value: any): value is Simple_Model {
    return check_Simple_95_Model(value)
  }
})()
