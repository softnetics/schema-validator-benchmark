import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Complex1_Environment = ET.Type<typeof Complex1_Environment>
export const Complex1_Environment = ES.Union(
  ES.Literal('development'),
  ES.Literal('staging'),
  ES.Literal('production')
)

export type Complex1_DatabaseConfig = ET.Type<typeof Complex1_DatabaseConfig>
export const Complex1_DatabaseConfig = ES.Struct({
  host: ES.String,
  port: ES.Number,
  username: ES.String,
  password: ES.String,
  database: ES.String
})

export type Complex1_ServiceEndpoint = ET.Type<typeof Complex1_ServiceEndpoint>
export const Complex1_ServiceEndpoint = ES.Struct({
  url: ES.String,
  timeout: ES.Number,
  retries: ES.Number
})

export type Complex1_FeatureFlags = ET.Type<typeof Complex1_FeatureFlags>
export const Complex1_FeatureFlags = ES.Struct({
  enableNewFeature: ES.Boolean,
  betaUsersOnly: ES.Boolean
})

export type Complex1_LoggingConfig = ET.Type<typeof Complex1_LoggingConfig>
export const Complex1_LoggingConfig = ES.Struct({
  level: ES.Union(
    ES.Literal('debug'),
    ES.Literal('info'),
    ES.Literal('warn'),
    ES.Literal('error')
  ),
  destination: ES.Union(
    ES.Literal('console'),
    ES.Literal('file'),
    ES.Literal('remote')
  ),
  filePath: ES.optional(ES.String),
  remoteUrl: ES.optional(ES.String)
})

export type Complex1_Config = ET.Type<typeof Complex1_Config>
export const Complex1_Config = ES.Struct({
  appName: ES.String,
  version: ES.String,
  environment: Complex1_Environment,
  database: Complex1_DatabaseConfig,
  services: ES.Struct({
    authService: Complex1_ServiceEndpoint,
    paymentService: Complex1_ServiceEndpoint,
    notificationService: Complex1_ServiceEndpoint
  }),
  featureFlags: Complex1_FeatureFlags,
  logging: Complex1_LoggingConfig,
  enableNewFeature: ES.Boolean,
  betaUsersOnly: ES.Boolean
})
