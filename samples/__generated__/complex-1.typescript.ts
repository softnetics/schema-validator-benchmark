export type Complex1_Environment = 'development' | 'staging' | 'production'
export const Complex1_Environment = (() => {
  function check_Complex1_95_Environment(value: any): boolean {
    return (
      value === 'development' || value === 'staging' || value === 'production'
    )
  }
  return function check(value: any): value is Complex1_Environment {
    return check_Complex1_95_Environment(value)
  }
})()

export type Complex1_DatabaseConfig = {
  host: string
  port: number
  username: string
  password: string
  database: string
}
export const Complex1_DatabaseConfig = (() => {
  function check_Complex1_95_DatabaseConfig(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.host === 'string' &&
      Number.isFinite(value.port) &&
      typeof value.username === 'string' &&
      typeof value.password === 'string' &&
      typeof value.database === 'string'
    )
  }
  return function check(value: any): value is Complex1_DatabaseConfig {
    return check_Complex1_95_DatabaseConfig(value)
  }
})()

export type Complex1_ServiceEndpoint = {
  url: string
  timeout: number
  retries: number
}
export const Complex1_ServiceEndpoint = (() => {
  function check_Complex1_95_ServiceEndpoint(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.url === 'string' &&
      Number.isFinite(value.timeout) &&
      Number.isFinite(value.retries)
    )
  }
  return function check(value: any): value is Complex1_ServiceEndpoint {
    return check_Complex1_95_ServiceEndpoint(value)
  }
})()

export type Complex1_FeatureFlags = {
  enableNewFeature: boolean
  betaUsersOnly: boolean
}
export const Complex1_FeatureFlags = (() => {
  function check_Complex1_95_FeatureFlags(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.enableNewFeature === 'boolean' &&
      typeof value.betaUsersOnly === 'boolean'
    )
  }
  return function check(value: any): value is Complex1_FeatureFlags {
    return check_Complex1_95_FeatureFlags(value)
  }
})()

export type Complex1_LoggingConfig = {
  level: 'debug' | 'info' | 'warn' | 'error'
  destination: 'console' | 'file' | 'remote'
  filePath?: string
  remoteUrl?: string
}
export const Complex1_LoggingConfig = (() => {
  function check_Complex1_95_LoggingConfig(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      (value.level === 'debug' ||
        value.level === 'info' ||
        value.level === 'warn' ||
        value.level === 'error') &&
      (value.destination === 'console' ||
        value.destination === 'file' ||
        value.destination === 'remote') &&
      (value.filePath !== undefined
        ? typeof value.filePath === 'string'
        : true) &&
      (value.remoteUrl !== undefined
        ? typeof value.remoteUrl === 'string'
        : true)
    )
  }
  return function check(value: any): value is Complex1_LoggingConfig {
    return check_Complex1_95_LoggingConfig(value)
  }
})()

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
  enableNewFeature: boolean
  betaUsersOnly: boolean
}
export const Complex1_Config = (() => {
  function check_Complex1_95_Environment(value: any): boolean {
    return (
      value === 'development' || value === 'staging' || value === 'production'
    )
  }
  function check_Complex1_95_DatabaseConfig(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.host === 'string' &&
      Number.isFinite(value.port) &&
      typeof value.username === 'string' &&
      typeof value.password === 'string' &&
      typeof value.database === 'string'
    )
  }
  function check_Complex1_95_ServiceEndpoint(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.url === 'string' &&
      Number.isFinite(value.timeout) &&
      Number.isFinite(value.retries)
    )
  }
  function check_Complex1_95_FeatureFlags(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.enableNewFeature === 'boolean' &&
      typeof value.betaUsersOnly === 'boolean'
    )
  }
  function check_Complex1_95_LoggingConfig(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      (value.level === 'debug' ||
        value.level === 'info' ||
        value.level === 'warn' ||
        value.level === 'error') &&
      (value.destination === 'console' ||
        value.destination === 'file' ||
        value.destination === 'remote') &&
      (value.filePath !== undefined
        ? typeof value.filePath === 'string'
        : true) &&
      (value.remoteUrl !== undefined
        ? typeof value.remoteUrl === 'string'
        : true)
    )
  }
  function check_Complex1_95_Config(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.appName === 'string' &&
      typeof value.version === 'string' &&
      check_Complex1_95_Environment(value.environment) &&
      check_Complex1_95_DatabaseConfig(value.database) &&
      typeof value.services === 'object' &&
      value.services !== null &&
      !Array.isArray(value.services) &&
      check_Complex1_95_ServiceEndpoint(value.services.authService) &&
      check_Complex1_95_ServiceEndpoint(value.services.paymentService) &&
      check_Complex1_95_ServiceEndpoint(value.services.notificationService) &&
      check_Complex1_95_FeatureFlags(value.featureFlags) &&
      check_Complex1_95_LoggingConfig(value.logging) &&
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      typeof value.enableNewFeature === 'boolean' &&
      typeof value.betaUsersOnly === 'boolean'
    )
  }
  return function check(value: any): value is Complex1_Config {
    return check_Complex1_95_Config(value)
  }
})()
