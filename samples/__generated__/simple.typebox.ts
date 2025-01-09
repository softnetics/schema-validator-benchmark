import { Type, Static } from '@sinclair/typebox'


type Simple_SubModel = Static<typeof Simple_SubModel>
const Simple_SubModel = Type.Object({
a: Type.Date(),
b: Type.String()
})

type Simple_Model = Static<typeof Simple_Model>
const Simple_Model = Type.Object({
a: Type.Number(),
b: Type.String(),
c: Type.Boolean(),
d: Type.Array(Simple_SubModel)
})