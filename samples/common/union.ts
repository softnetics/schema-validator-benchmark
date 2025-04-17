type Dog = {
  name: string
  type: 'mammal'
  hasFur: boolean
  breed: 'dog'
  barkingLevel: 'low' | 'medium' | 'high'
}

type Cat = {
  name: string
  type: 'mammal'
  hasFur: boolean
  breed: 'cat'
  clawSharpness: 'dull' | 'sharp'
}

type Eagle = {
  name: string
  type: 'bird'
  canFly: boolean
  species: 'eagle'
  wingSpan: number
}

type Penguin = {
  name: string
  type: 'bird'
  canFly: boolean
  species: 'penguin'
  swimmingSpeed: number
}

export type Union_Model = Dog | Cat | Eagle | Penguin
