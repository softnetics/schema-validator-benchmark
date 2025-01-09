import * as v from 'valibot'

export type Complex1_Environment = v.InferOutput<typeof Complex1_Environment>
export const Complex1_Environment = v.union([
  v.literal('development'),
  v.literal('staging'),
  v.literal('production')
])

export type Complex1_DatabaseConfig = v.InferOutput<
  typeof Complex1_DatabaseConfig
>
export const Complex1_DatabaseConfig = v.object({
  host: v.string(),
  port: v.number(),
  username: v.string(),
  password: v.string(),
  database: v.string()
})

export type Complex1_ServiceEndpoint = v.InferOutput<
  typeof Complex1_ServiceEndpoint
>
export const Complex1_ServiceEndpoint = v.object({
  url: v.string(),
  timeout: v.number(),
  retries: v.number()
})

export type Complex1_FeatureFlags = v.InferOutput<typeof Complex1_FeatureFlags>
export const Complex1_FeatureFlags = v.object({
  enableNewFeature: v.boolean(),
  betaUsersOnly: v.boolean()
})

export type Complex1_LoggingConfig = v.InferOutput<
  typeof Complex1_LoggingConfig
>
export const Complex1_LoggingConfig = v.object({
  level: v.union([
    v.literal('debug'),
    v.literal('info'),
    v.literal('warn'),
    v.literal('error')
  ]),
  destination: v.union([
    v.literal('console'),
    v.literal('file'),
    v.literal('remote')
  ]),
  filePath: v.optional(v.string()),
  remoteUrl: v.optional(v.string())
})

export type Complex1_Config = v.InferOutput<typeof Complex1_Config>
export const Complex1_Config = v.intersect([
  v.object({
    appName: v.string(),
    version: v.string(),
    environment: Complex1_Environment,
    database: Complex1_DatabaseConfig,
    services: v.object({
      authService: Complex1_ServiceEndpoint,
      paymentService: Complex1_ServiceEndpoint,
      notificationService: Complex1_ServiceEndpoint
    }),
    featureFlags: Complex1_FeatureFlags,
    logging: Complex1_LoggingConfig
  }),
  v.object({
    enableNewFeature: v.boolean(),
    betaUsersOnly: v.boolean()
  })
])
