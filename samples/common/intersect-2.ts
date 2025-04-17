type Intersect2_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

export type Intersect2_Model = Intersect2_BaseSubModel & {
  id: string
  items: string[]
}
