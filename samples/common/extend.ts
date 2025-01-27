type Extend_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

export type Extend_Model = Extend_BaseSubModel & {
  id: string
  items: string[]
}
