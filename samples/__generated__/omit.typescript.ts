export type Omit_A = {
  id: number
  name: string
  age: number
  email: string
  role: 'admin' | 'user' | 'guest'
}
export const Omit_A = (() => {
  function check_Omit_95_A(value: any): boolean {
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
  return function check(value: any): value is Omit_A {
    return check_Omit_95_A(value)
  }
})()

export type Omit_B = {
  id: number
  name: string
  role: 'admin' | 'user' | 'guest'
}
export const Omit_B = (() => {
  function check_Omit_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Omit_B {
    return check_Omit_95_B(value)
  }
})()

export type Omit_C = {
  additionalProps: Omit_B
  metadata: string
  timestamp: Date
}
export const Omit_C = (() => {
  function check_Omit_95_C(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      check_Omit_95_B(value.additionalProps) &&
      typeof value.metadata === 'string' &&
      value.timestamp instanceof Date &&
      Number.isFinite(value.timestamp.getTime())
    )
  }
  function check_Omit_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Omit_C {
    return check_Omit_95_C(value)
  }
})()

export type Omit_D = {
  additionalProps: Omit_B
}
export const Omit_D = (() => {
  function check_Omit_95_D(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      check_Omit_95_B(value.additionalProps)
    )
  }
  function check_Omit_95_B(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Omit_D {
    return check_Omit_95_D(value)
  }
})()
