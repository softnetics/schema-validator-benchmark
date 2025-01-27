export const SchemaValidationLibrary = {
  ZOD: 'zod',
  YUP: 'yup',
  VALIBOT: 'valibot',
  EFFECT: 'effect',
  IO_TS: 'io-ts',
  TYPESCRIPT: 'typescript',
  TYPEBOX: 'typebox',
} as const

export type SchemaValidationLibrary =
  (typeof SchemaValidationLibrary)[keyof typeof SchemaValidationLibrary]
