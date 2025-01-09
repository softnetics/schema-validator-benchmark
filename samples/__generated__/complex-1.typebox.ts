import { Type, Static } from '@sinclair/typebox'


type Complex1_Environment = Static<typeof Complex1_Environment>
const Complex1_Environment = Type.Union([
Type.Literal('development'),
Type.Literal('staging'),
Type.Literal('production')
])

type Complex1_DatabaseConfig = Static<typeof Complex1_DatabaseConfig>
const Complex1_DatabaseConfig = Type.Object({
host: Type.String(),
port: Type.Number(),
username: Type.String(),
password: Type.String(),
database: Type.String()
})

type Complex1_ServiceEndpoint = Static<typeof Complex1_ServiceEndpoint>
const Complex1_ServiceEndpoint = Type.Object({
url: Type.String(),
timeout: Type.Number(),
retries: Type.Number()
})

type Complex1_FeatureFlags = Static<typeof Complex1_FeatureFlags>
const Complex1_FeatureFlags = Type.Object({
enableNewFeature: Type.Boolean(),
betaUsersOnly: Type.Boolean()
})

type Complex1_LoggingConfig = Static<typeof Complex1_LoggingConfig>
const Complex1_LoggingConfig = Type.Object({
level: Type.Union([
Type.Literal('debug'),
Type.Literal('info'),
Type.Literal('warn'),
Type.Literal('error')
]),
destination: Type.Union([
Type.Literal('console'),
Type.Literal('file'),
Type.Literal('remote')
]),
filePath: Type.Optional(Type.String()),
remoteUrl: Type.Optional(Type.String())
})

export type Complex1_Config = Static<typeof Complex1_Config>
export const Complex1_Config = Type.Intersect([
Type.Object({
appName: Type.String(),
version: Type.String(),
environment: Complex1_Environment,
database: Complex1_DatabaseConfig,
services: Type.Object({
authService: Complex1_ServiceEndpoint,
paymentService: Complex1_ServiceEndpoint,
notificationService: Complex1_ServiceEndpoint
}),
featureFlags: Complex1_FeatureFlags,
logging: Complex1_LoggingConfig
}),
Type.Mapped(Type.KeyOf(Complex1_FeatureFlags), K => Type.Boolean())
])