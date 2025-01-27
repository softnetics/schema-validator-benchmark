type Complex_Base = {
  id: number
  name: string
  age: number
  role: 'admin' | 'user' | 'guest'
}

type Complex_Extended = Complex_Base & {
  email: string
  active: boolean
}

type Complex_UserType =
  | (Complex_Base & { role: 'admin'; permissions: string[] })
  | (Complex_Base & { role: 'user'; group: string })
  | (Complex_Base & { role: 'guest'; restrictions: string[] })

type Complex_WithoutAgeAndEmail = Omit<Complex_Extended, 'age' | 'email'>

type Complex_ExtractAdminAndUser = Extract<Complex_UserType, { role: 'admin' | 'user' }>

type Complex_ExcludeGuest = Exclude<Complex_UserType, { role: 'guest' }>

export type Complex_Model = Complex_WithoutAgeAndEmail & {
  extraInfo: Complex_ExtractAdminAndUser
  filteredRoles: Complex_ExcludeGuest
}
