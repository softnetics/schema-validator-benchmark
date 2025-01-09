type Complex1_Environment = 'development' | 'staging' | 'production'

interface Complex1_DatabaseConfig {
  host: string
  port: number
  username: string
  password: string
  database: string
}

interface Complex1_ServiceEndpoint {
  url: string
  timeout: number
  retries: number
}

interface Complex1_FeatureFlags {
  enableNewFeature: boolean
  betaUsersOnly: boolean
}

interface Complex1_LoggingConfig {
  level: 'debug' | 'info' | 'warn' | 'error'
  destination: 'console' | 'file' | 'remote'
  filePath?: string
  remoteUrl?: string
}

export type Complex1_Config = {
  appName: string
  version: string
  environment: Complex1_Environment
  database: Complex1_DatabaseConfig
  services: {
    authService: Complex1_ServiceEndpoint
    paymentService: Complex1_ServiceEndpoint
    notificationService: Complex1_ServiceEndpoint
  }
  featureFlags: Complex1_FeatureFlags
  logging: Complex1_LoggingConfig
} & {
  [K in keyof Complex1_FeatureFlags as `is${Capitalize<string & K>}`]: boolean
}
