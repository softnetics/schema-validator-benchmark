import * as y from 'yup'

export type Complex_Base = y.InferType<typeof Complex_Base>
export const Complex_Base = y.object({
  id: y.number().required(),
  name: y.string().required(),
  age: y.number().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required()
})

export type Complex_Extended = y.InferType<typeof Complex_Extended>
export const Complex_Extended = y.object({
  id: y.number().required(),
  name: y.string().required(),
  age: y.number().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required(),
  email: y.string().required(),
  active: y.boolean().required()
})

export type Complex_UserType = y.InferType<typeof Complex_UserType>
export const Complex_UserType = y
  .mixed()
  .oneOf([
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      permissions: y.array(y.string().required())
    }),
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      group: y.string().required()
    }),
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      restrictions: y.array(y.string().required())
    })
  ])
  .required()

export type Complex_WithoutAgeAndEmail = y.InferType<
  typeof Complex_WithoutAgeAndEmail
>
export const Complex_WithoutAgeAndEmail = y.object({
  id: y.number().required(),
  name: y.string().required(),
  role: y.mixed().oneOf(['admin', 'user', 'guest']).required(),
  active: y.boolean().required()
})

export type Complex_ExtractAdminAndUser = y.InferType<
  typeof Complex_ExtractAdminAndUser
>
export const Complex_ExtractAdminAndUser = y
  .mixed()
  .oneOf([
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      permissions: y.array(y.string().required())
    }),
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      group: y.string().required()
    })
  ])
  .required()

export type Complex_ExcludeGuest = y.InferType<typeof Complex_ExcludeGuest>
export const Complex_ExcludeGuest = y
  .mixed()
  .oneOf([
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      permissions: y.array(y.string().required())
    }),
    y.object({
      id: y.number().required(),
      name: y.string().required(),
      age: y.number().required(),
      role: y.mixed(/* unsupported */),
      group: y.string().required()
    })
  ])
  .required()

export type Complex_Model = y.InferType<typeof Complex_Model>
export const Complex_Model = y.mixed(/* unsupported */)
