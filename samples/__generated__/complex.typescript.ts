export type Complex_Base = {
  id: number
  name: string
  age: number
  role: 'admin' | 'user' | 'guest'
}
export const Complex_Base = (() => {
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Complex_Base {
    return check_Complex_95_Base(value)
  }
})()

export type Complex_Extended = Complex_Base & {
  email: string
  active: boolean
}
export const Complex_Extended = (() => {
  function check_Complex_95_Extended(value: any): boolean {
    return (
      check_Complex_95_Base(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.email === 'string' &&
      typeof value.active === 'boolean'
    )
  }
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Complex_Extended {
    return check_Complex_95_Extended(value)
  }
})()

export type Complex_UserType =
  | (Complex_Base & {
      role: 'admin'
      permissions: Array<string>
    })
  | (Complex_Base & {
      role: 'user'
      group: string
    })
  | (Complex_Base & {
      role: 'guest'
      restrictions: Array<string>
    })
export const Complex_UserType = (() => {
  function check_Complex_95_UserType(value: any): boolean {
    return (
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'admin' &&
        Array.isArray(value.permissions) &&
        value.permissions.every((value: any) => typeof value === 'string')) ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'user' &&
        typeof value.group === 'string') ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'guest' &&
        Array.isArray(value.restrictions) &&
        value.restrictions.every((value: any) => typeof value === 'string'))
    )
  }
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Complex_UserType {
    return check_Complex_95_UserType(value)
  }
})()

export type Complex_WithoutAgeAndEmail = {
  id: number
  name: string
  role: 'admin' | 'user' | 'guest'
} & {
  active: boolean
}
export const Complex_WithoutAgeAndEmail = (() => {
  function check_Complex_95_WithoutAgeAndEmail(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest') &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.active === 'boolean'
    )
  }
  return function check(value: any): value is Complex_WithoutAgeAndEmail {
    return check_Complex_95_WithoutAgeAndEmail(value)
  }
})()

export type Complex_ExtractAdminAndUser =
  | (Complex_Base & {
      role: 'admin'
      permissions: Array<string>
    })
  | (Complex_Base & {
      role: 'user'
      group: string
    })
export const Complex_ExtractAdminAndUser = (() => {
  function check_Complex_95_ExtractAdminAndUser(value: any): boolean {
    return (
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'admin' &&
        Array.isArray(value.permissions) &&
        value.permissions.every((value: any) => typeof value === 'string')) ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'user' &&
        typeof value.group === 'string')
    )
  }
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Complex_ExtractAdminAndUser {
    return check_Complex_95_ExtractAdminAndUser(value)
  }
})()

export type Complex_ExcludeGuest =
  | (Complex_Base & {
      role: 'admin'
      permissions: Array<string>
    })
  | (Complex_Base & {
      role: 'user'
      group: string
    })
export const Complex_ExcludeGuest = (() => {
  function check_Complex_95_ExcludeGuest(value: any): boolean {
    return (
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'admin' &&
        Array.isArray(value.permissions) &&
        value.permissions.every((value: any) => typeof value === 'string')) ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'user' &&
        typeof value.group === 'string')
    )
  }
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  return function check(value: any): value is Complex_ExcludeGuest {
    return check_Complex_95_ExcludeGuest(value)
  }
})()

export type Complex_Model = Complex_WithoutAgeAndEmail & {
  extraInfo: Complex_ExtractAdminAndUser
  filteredRoles: Complex_ExcludeGuest
}
export const Complex_Model = (() => {
  function check_Complex_95_Model(value: any): boolean {
    return (
      check_Complex_95_WithoutAgeAndEmail(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      check_Complex_95_ExtractAdminAndUser(value.extraInfo) &&
      check_Complex_95_ExcludeGuest(value.filteredRoles)
    )
  }
  function check_Complex_95_WithoutAgeAndEmail(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest') &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.active === 'boolean'
    )
  }
  function check_Complex_95_ExtractAdminAndUser(value: any): boolean {
    return (
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'admin' &&
        Array.isArray(value.permissions) &&
        value.permissions.every((value: any) => typeof value === 'string')) ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'user' &&
        typeof value.group === 'string')
    )
  }
  function check_Complex_95_Base(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      Number.isFinite(value.id) &&
      typeof value.name === 'string' &&
      Number.isFinite(value.age) &&
      (value.role === 'admin' ||
        value.role === 'user' ||
        value.role === 'guest')
    )
  }
  function check_Complex_95_ExcludeGuest(value: any): boolean {
    return (
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'admin' &&
        Array.isArray(value.permissions) &&
        value.permissions.every((value: any) => typeof value === 'string')) ||
      (check_Complex_95_Base(value) &&
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        value.role === 'user' &&
        typeof value.group === 'string')
    )
  }
  return function check(value: any): value is Complex_Model {
    return check_Complex_95_Model(value)
  }
})()
