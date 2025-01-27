export type Animal = {
  name: string
}
export const Animal = (() => {
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Animal {
    return check_Animal(value)
  }
})()

export type Mammal = Animal & {
  type: 'mammal'
  hasFur: boolean
}
export const Mammal = (() => {
  function check_Mammal(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Mammal {
    return check_Mammal(value)
  }
})()

export type Bird = Animal & {
  type: 'bird'
  canFly: boolean
}
export const Bird = (() => {
  function check_Bird(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Bird {
    return check_Bird(value)
  }
})()

export type Dog = Mammal & {
  breed: 'dog'
  barkingLevel: 'low' | 'medium' | 'high'
}
export const Dog = (() => {
  function check_Dog(value: any): boolean {
    return (
      check_Mammal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.breed === 'dog' &&
      (value.barkingLevel === 'low' ||
        value.barkingLevel === 'medium' ||
        value.barkingLevel === 'high')
    )
  }
  function check_Mammal(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Dog {
    return check_Dog(value)
  }
})()

export type Cat = Mammal & {
  breed: 'cat'
  clawSharpness: 'dull' | 'sharp'
}
export const Cat = (() => {
  function check_Cat(value: any): boolean {
    return (
      check_Mammal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.breed === 'cat' &&
      (value.clawSharpness === 'dull' || value.clawSharpness === 'sharp')
    )
  }
  function check_Mammal(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Cat {
    return check_Cat(value)
  }
})()

export type Eagle = Bird & {
  species: 'eagle'
  wingSpan: number
}
export const Eagle = (() => {
  function check_Eagle(value: any): boolean {
    return (
      check_Bird(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.species === 'eagle' &&
      Number.isFinite(value.wingSpan)
    )
  }
  function check_Bird(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  return function check(value: any): value is Eagle {
    return check_Eagle(value)
  }
})()

export type Penguin = Bird & {
  species: 'penguin'
  swimmingSpeed: number
}
export const Penguin = (() => {
  function check_Penguin(value: any): boolean {
    return (
      check_Bird(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.species === 'penguin' &&
      Number.isFinite(value.swimmingSpeed)
    )
  }
  function check_Bird(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
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
      check_Mammal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.breed === 'dog' &&
      (value.barkingLevel === 'low' ||
        value.barkingLevel === 'medium' ||
        value.barkingLevel === 'high')
    )
  }
  function check_Mammal(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'mammal' &&
      typeof value.hasFur === 'boolean'
    )
  }
  function check_Animal(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.name === 'string'
    )
  }
  function check_Cat(value: any): boolean {
    return (
      check_Mammal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.breed === 'cat' &&
      (value.clawSharpness === 'dull' || value.clawSharpness === 'sharp')
    )
  }
  function check_Eagle(value: any): boolean {
    return (
      check_Bird(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.species === 'eagle' &&
      Number.isFinite(value.wingSpan)
    )
  }
  function check_Bird(value: any): boolean {
    return (
      check_Animal(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.type === 'bird' &&
      typeof value.canFly === 'boolean'
    )
  }
  function check_Penguin(value: any): boolean {
    return (
      check_Bird(value) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.species === 'penguin' &&
      Number.isFinite(value.swimmingSpeed)
    )
  }
  return function check(value: any): value is Union_Model {
    return check_Union_95_Model(value)
  }
})()
