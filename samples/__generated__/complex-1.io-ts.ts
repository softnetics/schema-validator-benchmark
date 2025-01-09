import * as t from 'io-ts'

export type Complex1_Environment = t.TypeOf<typeof Complex1_Environment>
export const Complex1_Environment = t.union([
  t.literal('development'),
  t.literal('staging'),
  t.literal('production')
])

export type Complex1_DatabaseConfig = t.TypeOf<typeof Complex1_DatabaseConfig>
export const Complex1_DatabaseConfig = t.type({
  host: t.string,
  port: t.number,
  username: t.string,
  password: t.string,
  database: t.string
})

export type Complex1_ServiceEndpoint = t.TypeOf<typeof Complex1_ServiceEndpoint>
export const Complex1_ServiceEndpoint = t.type({
  url: t.string,
  timeout: t.number,
  retries: t.number
})

export type Complex1_FeatureFlags = t.TypeOf<typeof Complex1_FeatureFlags>
export const Complex1_FeatureFlags = t.type({
  enableNewFeature: t.boolean,
  betaUsersOnly: t.boolean
})

export type Complex1_LoggingConfig = t.TypeOf<typeof Complex1_LoggingConfig>
export const Complex1_LoggingConfig = t.type({
  level: t.union([
    t.literal('debug'),
    t.literal('info'),
    t.literal('warn'),
    t.literal('error')
  ]),
  destination: t.union([
    t.literal('console'),
    t.literal('file'),
    t.literal('remote')
  ]),
  filePath: t.union([t.undefined, t.string]),
  remoteUrl: t.union([t.undefined, t.string])
})

export type Complex1_Config = t.TypeOf<typeof Complex1_Config>
export const Complex1_Config = t.intersection([
  t.type({
    appName: t.string,
    version: t.string,
    environment: Complex1_Environment,
    database: Complex1_DatabaseConfig,
    services: t.type({
      authService: Complex1_ServiceEndpoint,
      paymentService: Complex1_ServiceEndpoint,
      notificationService: Complex1_ServiceEndpoint
    }),
    featureFlags: Complex1_FeatureFlags,
    logging: Complex1_LoggingConfig
  }),
  t.type({
    enableNewFeature: t.boolean,
    betaUsersOnly: t.boolean
  })
])
