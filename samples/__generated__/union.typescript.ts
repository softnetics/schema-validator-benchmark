export type Dog = {
  name: string
  type: 'mammal'
  hasFur: boolean
  breed: 'dog'
  barkingLevel: 'low' | 'medium' | 'high'
}
export const Dog = (() => {
  function check_Dog(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean' &&
      value.breed === 'dog' &&
      (value.barkingLevel === 'low' ||
        value.barkingLevel === 'medium' ||
        value.barkingLevel === 'high')
    )
  }
  return function check(value: any): value is Dog {
    return check_Dog(value)
  }
})()

export type Cat = {
  name: string
  type: 'mammal'
  hasFur: boolean
  breed: 'cat'
  clawSharpness: 'dull' | 'sharp'
}
export const Cat = (() => {
  function check_Cat(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean' &&
      value.breed === 'cat' &&
      (value.clawSharpness === 'dull' || value.clawSharpness === 'sharp')
    )
  }
  return function check(value: any): value is Cat {
    return check_Cat(value)
  }
})()

export type Eagle = {
  name: string
  type: 'bird'
  canFly: boolean
  species: 'eagle'
  wingSpan: number
}
export const Eagle = (() => {
  function check_Eagle(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean' &&
      value.species === 'eagle' &&
      Number.isFinite(value.wingSpan)
    )
  }
  return function check(value: any): value is Eagle {
    return check_Eagle(value)
  }
})()

export type Penguin = {
  name: string
  type: 'bird'
  canFly: boolean
  species: 'penguin'
  swimmingSpeed: number
}
export const Penguin = (() => {
  function check_Penguin(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean' &&
      value.species === 'penguin' &&
      Number.isFinite(value.swimmingSpeed)
    )
  }
  return function check(value: any): value is Penguin {
    return check_Penguin(value)
  }
})()

export type Union_Model = Dog | Cat | Eagle | Penguin
export const Union_Model = (() => {
  function check_Union_95_Model(value: any): boolean {
    return (
      check_Dog(value) ||
      check_Cat(value) ||
      check_Eagle(value) ||
      check_Penguin(value)
    )
  }
  function check_Dog(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean' &&
      value.breed === 'dog' &&
      (value.barkingLevel === 'low' ||
        value.barkingLevel === 'medium' ||
        value.barkingLevel === 'high')
    )
  }
  function check_Cat(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean' &&
      value.breed === 'cat' &&
      (value.clawSharpness === 'dull' || value.clawSharpness === 'sharp')
    )
  }
  function check_Eagle(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean' &&
      value.species === 'eagle' &&
      Number.isFinite(value.wingSpan)
    )
  }
  function check_Penguin(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string' &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean' &&
      value.species === 'penguin' &&
      Number.isFinite(value.swimmingSpeed)
    )
  }
  return function check(value: any): value is Union_Model {
    return check_Union_95_Model(value)
  }
})()
