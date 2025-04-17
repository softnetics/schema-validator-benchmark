type Omit_A = {
  id: number
  name: string
  age: number
  email: string
  role: 'admin' | 'user' | 'guest'
}

type Omit_B = Omit<Omit_A, 'age' | 'email'>

type Omit_C = {
  additionalProps: Omit_B
  metadata: string
  timestamp: Date
}

export type Omit_D = Omit<Omit_C, 'metadata' | 'timestamp'>
