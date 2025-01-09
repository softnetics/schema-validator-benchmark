import { z } from 'zod'

export type Complex1_Environment = z.infer<typeof Complex1_Environment>
export const Complex1_Environment = z.union([
  z.literal('development'),
  z.literal('staging'),
  z.literal('production')
])

export type Complex1_DatabaseConfig = z.infer<typeof Complex1_DatabaseConfig>
export const Complex1_DatabaseConfig = z.object({
  host: z.string(),
  port: z.number(),
  username: z.string(),
  password: z.string(),
  database: z.string()
})

export type Complex1_ServiceEndpoint = z.infer<typeof Complex1_ServiceEndpoint>
export const Complex1_ServiceEndpoint = z.object({
  url: z.string(),
  timeout: z.number(),
  retries: z.number()
})

export type Complex1_FeatureFlags = z.infer<typeof Complex1_FeatureFlags>
export const Complex1_FeatureFlags = z.object({
  enableNewFeature: z.boolean(),
  betaUsersOnly: z.boolean()
})

export type Complex1_LoggingConfig = z.infer<typeof Complex1_LoggingConfig>
export const Complex1_LoggingConfig = z.object({
  level: z.union([
    z.literal('debug'),
    z.literal('info'),
    z.literal('warn'),
    z.literal('error')
  ]),
  destination: z.union([
    z.literal('console'),
    z.literal('file'),
    z.literal('remote')
  ]),
  filePath: z.string().optional(),
  remoteUrl: z.string().optional()
})

export type Complex1_Config = z.infer<typeof Complex1_Config>
export const Complex1_Config = z
  .object({
    appName: z.string(),
    version: z.string(),
    environment: Complex1_Environment,
    database: Complex1_DatabaseConfig,
    services: z.object({
      authService: Complex1_ServiceEndpoint,
      paymentService: Complex1_ServiceEndpoint,
      notificationService: Complex1_ServiceEndpoint
    }),
    featureFlags: Complex1_FeatureFlags,
    logging: Complex1_LoggingConfig
  })
  .merge(
    z.object({
      enableNewFeature: z.boolean(),
      betaUsersOnly: z.boolean()
    })
  )
