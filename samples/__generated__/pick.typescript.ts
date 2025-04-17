export type Pick_A = {
  id: number
  name: string
  age: number
  email: string
  role: 'admin' | 'user' | 'guest'
}
export const Pick_A = (() => {
  function check_Pick_95_A(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      typeof value.email === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Pick_A {
    return check_Pick_95_A(value)
  }
})()

export type Pick_B = {
  age: number
  email: string
}
export const Pick_B = (() => {
  function check_Pick_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.age) &&
      typeof value.email === 'string'
    )
  }
  return function check(value: any): value is Pick_B {
    return check_Pick_95_B(value)
  }
})()

export type Pick_C = {
  additionalProps: Pick_B
  metadata: string
  timestamp: Date | null
}
export const Pick_C = (() => {
  function check_Pick_95_C(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      check_Pick_95_B(value.additionalProps) &&
      typeof value.metadata === 'string' &&
      ((value.timestamp instanceof Date &&
        Number.isFinite(value.timestamp.getTime())) ||
        value.timestamp === null)
    )
  }
  function check_Pick_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.age) &&
      typeof value.email === 'string'
    )
  }
  return function check(value: any): value is Pick_C {
    return check_Pick_95_C(value)
  }
})()

export type Pick_D = {
  additionalProps: Pick_B
  timestamp: Date | null
}
export const Pick_D = (() => {
  function check_Pick_95_D(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      check_Pick_95_B(value.additionalProps) &&
      ((value.timestamp instanceof Date &&
        Number.isFinite(value.timestamp.getTime())) ||
        value.timestamp === null)
    )
  }
  function check_Pick_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.age) &&
      typeof value.email === 'string'
    )
  }
  return function check(value: any): value is Pick_D {
    return check_Pick_95_D(value)
  }
})()
