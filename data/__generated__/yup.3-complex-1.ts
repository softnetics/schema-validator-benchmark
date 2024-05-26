import * as y from 'yup'

export type Complex1_Environment = y.InferType<typeof Complex1_Environment>
export const Complex1_Environment = y
  .mixed()
  .oneOf(['development', 'staging', 'production'])
  .required()

export type Complex1_DatabaseConfig = y.InferType<
  typeof Complex1_DatabaseConfig
>
export const Complex1_DatabaseConfig = y.object({
  host: y.string().required(),
  port: y.number().required(),
  username: y.string().required(),
  password: y.string().required(),
  database: y.string().required()
})

export type Complex1_ServiceEndpoint = y.InferType<
  typeof Complex1_ServiceEndpoint
>
export const Complex1_ServiceEndpoint = y.object({
  url: y.string().required(),
  timeout: y.number().required(),
  retries: y.number().required()
})

export type Complex1_FeatureFlags = y.InferType<typeof Complex1_FeatureFlags>
export const Complex1_FeatureFlags = y.object({
  enableNewFeature: y.boolean().required(),
  betaUsersOnly: y.boolean().required()
})

export type Complex1_LoggingConfig = y.InferType<typeof Complex1_LoggingConfig>
export const Complex1_LoggingConfig = y.object({
  level: y.mixed().oneOf(['debug', 'info', 'warn', 'error']).required(),
  destination: y.mixed().oneOf(['console', 'file', 'remote']).required(),
  filePath: y.string().required().optional(),
  remoteUrl: y.string().required().optional()
})

export type Complex1_Config = y.InferType<typeof Complex1_Config>
export const Complex1_Config = y.object({
  appName: y.string().required(),
  version: y.string().required(),
  environment: Complex1_Environment,
  database: Complex1_DatabaseConfig,
  services: y.object({
    authService: Complex1_ServiceEndpoint,
    paymentService: Complex1_ServiceEndpoint,
    notificationService: Complex1_ServiceEndpoint
  }),
  featureFlags: Complex1_FeatureFlags,
  logging: Complex1_LoggingConfig,
  enableNewFeature: y.boolean().required(),
  betaUsersOnly: y.boolean().required()
})
