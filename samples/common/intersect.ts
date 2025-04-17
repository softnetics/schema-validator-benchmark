type Intersect_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

export type Intersect_Model = Intersect_BaseSubModel & {
  id: string
  items: string[]
}
