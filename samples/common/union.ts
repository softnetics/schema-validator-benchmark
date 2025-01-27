type Animal = {
  name: string
}

type Mammal = Animal & {
  type: 'mammal'
  hasFur: boolean
}

type Bird = Animal & {
  type: 'bird'
  canFly: boolean
}

type Dog = Mammal & {
  breed: 'dog'
  barkingLevel: 'low' | 'medium' | 'high'
}

type Cat = Mammal & {
  breed: 'cat'
  clawSharpness: 'dull' | 'sharp'
}

type Eagle = Bird & {
  species: 'eagle'
  wingSpan: number
}

type Penguin = Bird & {
  species: 'penguin'
  swimmingSpeed: number
}

export type Union_Model = Dog | Cat | Eagle | Penguin
