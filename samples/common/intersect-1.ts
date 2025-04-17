type Intersect1_BaseSubModel = {
  description: string
  createdAt: string
  updatedAt: string
}

type Intersect1_BaseSubModel2 = {
  id: string
  items: string[]
}

export type Intersect1_Model = Intersect1_BaseSubModel & Intersect1_BaseSubModel2
