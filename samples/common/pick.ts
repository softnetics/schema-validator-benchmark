type Pick_A = {
  id: number
  name: string
  age: number
  email: string
  role: 'admin' | 'user' | 'guest'
}

type Pick_B = Pick<Pick_A, 'age' | 'email'>

type Pick_C = {
  additionalProps: Pick_B
  metadata: string
  timestamp: Date | null
}

export type Pick_D = Pick<Pick_C, 'additionalProps' | 'timestamp'>
