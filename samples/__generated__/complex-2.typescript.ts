export type Complex2_InitialState = {
  status: 'initial'
  createdAt: string
  userId: string
  details: {
    description: string
    priority: 'low' | 'medium' | 'high'
    nestedDetails: {
      nestedField1: number
      nestedField2: string
    }
  }
}
export const Complex2_InitialState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  return function check(value: any): value is Complex2_InitialState {
    return check_Complex2_95_InitialState(value)
  }
})()

export type Complex2_LoadingState = {
  status: 'loading'
  startedAt: string
  userId: string
  progress: number
  previousState: Complex2_InitialState
  nestedState: {
    loadingStep: string
    loadingProgress: number
  }
}
export const Complex2_LoadingState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  return function check(value: any): value is Complex2_LoadingState {
    return check_Complex2_95_LoadingState(value)
  }
})()

export type Complex2_ValidationState = {
  status: 'validating'
  validationStartedAt: string
  userId: string
  steps: Array<{
    stepName: string
    completed: boolean
    details?: string
  }>
  previousState: Complex2_LoadingState
  nestedState: {
    validationStep: string
    validationProgress: number
  }
}
export const Complex2_ValidationState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  function check_Complex2_95_ValidationState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'validating' &&
      typeof value.validationStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.steps) &&
      value.steps.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.stepName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.details !== undefined
            ? typeof value.details === 'string'
            : true)
      ) &&
      check_Complex2_95_LoadingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.validationStep === 'string' &&
      Number.isFinite(value.nestedState.validationProgress)
    )
  }
  return function check(value: any): value is Complex2_ValidationState {
    return check_Complex2_95_ValidationState(value)
  }
})()

export type Complex2_ProcessingState = {
  status: 'processing'
  processingStartedAt: string
  userId: string
  tasks: Array<{
    taskId: string
    taskName: string
    completed: boolean
    result?: any
  }>
  previousState: Complex2_ValidationState
  nestedState: {
    processingStep: string
    processingProgress: number
  }
}
export const Complex2_ProcessingState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  function check_Complex2_95_ValidationState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'validating' &&
      typeof value.validationStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.steps) &&
      value.steps.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.stepName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.details !== undefined
            ? typeof value.details === 'string'
            : true)
      ) &&
      check_Complex2_95_LoadingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.validationStep === 'string' &&
      Number.isFinite(value.nestedState.validationProgress)
    )
  }
  function check_Complex2_95_ProcessingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'processing' &&
      typeof value.processingStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.tasks) &&
      value.tasks.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.taskId === 'string' &&
          typeof value.taskName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.result !== undefined ? true : true)
      ) &&
      check_Complex2_95_ValidationState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.processingStep === 'string' &&
      Number.isFinite(value.nestedState.processingProgress)
    )
  }
  return function check(value: any): value is Complex2_ProcessingState {
    return check_Complex2_95_ProcessingState(value)
  }
})()

export type Complex2_SuccessState = {
  status: 'success'
  finishedAt: string
  userId: string
  data: any
  previousState: Complex2_ProcessingState
  nestedState: {
    successStep: string
    successDetails: Array<string>
  }
}
export const Complex2_SuccessState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  function check_Complex2_95_ValidationState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'validating' &&
      typeof value.validationStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.steps) &&
      value.steps.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.stepName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.details !== undefined
            ? typeof value.details === 'string'
            : true)
      ) &&
      check_Complex2_95_LoadingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.validationStep === 'string' &&
      Number.isFinite(value.nestedState.validationProgress)
    )
  }
  function check_Complex2_95_ProcessingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'processing' &&
      typeof value.processingStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.tasks) &&
      value.tasks.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.taskId === 'string' &&
          typeof value.taskName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.result !== undefined ? true : true)
      ) &&
      check_Complex2_95_ValidationState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.processingStep === 'string' &&
      Number.isFinite(value.nestedState.processingProgress)
    )
  }
  function check_Complex2_95_SuccessState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'success' &&
      typeof value.finishedAt === 'string' &&
      typeof value.userId === 'string' &&
      true &&
      'data' in value &&
      check_Complex2_95_ProcessingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.successStep === 'string' &&
      Array.isArray(value.nestedState.successDetails) &&
      value.nestedState.successDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  return function check(value: any): value is Complex2_SuccessState {
    return check_Complex2_95_SuccessState(value)
  }
})()

export type Complex2_ErrorState = {
  status: 'error'
  errorOccurredAt: string
  userId: string
  errorCode: number
  errorMessage: string
  retryable: boolean
  nestedState: {
    errorStep: string
    errorDetails: Array<string>
  }
}
export const Complex2_ErrorState = (() => {
  function check_Complex2_95_ErrorState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'error' &&
      typeof value.errorOccurredAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.errorCode) &&
      typeof value.errorMessage === 'string' &&
      typeof value.retryable === 'boolean' &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.errorStep === 'string' &&
      Array.isArray(value.nestedState.errorDetails) &&
      value.nestedState.errorDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  return function check(value: any): value is Complex2_ErrorState {
    return check_Complex2_95_ErrorState(value)
  }
})()

export type Complex2_RetryState = {
  status: 'retry'
  retryCount: number
  retryAfter: string
  userId: string
  previousState: Complex2_ErrorState
  nestedState: {
    retryStep: string
    retryDetails: Array<string>
  }
}
export const Complex2_RetryState = (() => {
  function check_Complex2_95_ErrorState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'error' &&
      typeof value.errorOccurredAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.errorCode) &&
      typeof value.errorMessage === 'string' &&
      typeof value.retryable === 'boolean' &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.errorStep === 'string' &&
      Array.isArray(value.nestedState.errorDetails) &&
      value.nestedState.errorDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_RetryState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'retry' &&
      Number.isFinite(value.retryCount) &&
      typeof value.retryAfter === 'string' &&
      typeof value.userId === 'string' &&
      check_Complex2_95_ErrorState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.retryStep === 'string' &&
      Array.isArray(value.nestedState.retryDetails) &&
      value.nestedState.retryDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  return function check(value: any): value is Complex2_RetryState {
    return check_Complex2_95_RetryState(value)
  }
})()

export type Complex2_CompleteState = {
  status: 'complete'
  completedAt: string
  userId: string
  finalResult: any
  previousState: Complex2_SuccessState | Complex2_ErrorState
  nestedState: {
    completeStep: string
    completeDetails: Array<string>
  }
}
export const Complex2_CompleteState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  function check_Complex2_95_ValidationState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'validating' &&
      typeof value.validationStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.steps) &&
      value.steps.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.stepName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.details !== undefined
            ? typeof value.details === 'string'
            : true)
      ) &&
      check_Complex2_95_LoadingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.validationStep === 'string' &&
      Number.isFinite(value.nestedState.validationProgress)
    )
  }
  function check_Complex2_95_ProcessingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'processing' &&
      typeof value.processingStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.tasks) &&
      value.tasks.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.taskId === 'string' &&
          typeof value.taskName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.result !== undefined ? true : true)
      ) &&
      check_Complex2_95_ValidationState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.processingStep === 'string' &&
      Number.isFinite(value.nestedState.processingProgress)
    )
  }
  function check_Complex2_95_SuccessState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'success' &&
      typeof value.finishedAt === 'string' &&
      typeof value.userId === 'string' &&
      true &&
      'data' in value &&
      check_Complex2_95_ProcessingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.successStep === 'string' &&
      Array.isArray(value.nestedState.successDetails) &&
      value.nestedState.successDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_ErrorState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'error' &&
      typeof value.errorOccurredAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.errorCode) &&
      typeof value.errorMessage === 'string' &&
      typeof value.retryable === 'boolean' &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.errorStep === 'string' &&
      Array.isArray(value.nestedState.errorDetails) &&
      value.nestedState.errorDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_CompleteState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'complete' &&
      typeof value.completedAt === 'string' &&
      typeof value.userId === 'string' &&
      true &&
      'finalResult' in value &&
      (check_Complex2_95_SuccessState(value.previousState) ||
        check_Complex2_95_ErrorState(value.previousState)) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.completeStep === 'string' &&
      Array.isArray(value.nestedState.completeDetails) &&
      value.nestedState.completeDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  return function check(value: any): value is Complex2_CompleteState {
    return check_Complex2_95_CompleteState(value)
  }
})()

export type Complex2_WorkflowState =
  | Complex2_InitialState
  | Complex2_LoadingState
  | Complex2_ValidationState
  | Complex2_ProcessingState
  | Complex2_SuccessState
  | Complex2_ErrorState
  | Complex2_RetryState
  | Complex2_CompleteState
export const Complex2_WorkflowState = (() => {
  function check_Complex2_95_InitialState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'initial' &&
      typeof value.createdAt === 'string' &&
      typeof value.userId === 'string' &&
      typeof value.details === 'object' &&
      value.details !== null &&
      !Array.isArray(value.details) &&
      typeof value.details.description === 'string' &&
      (value.details.priority === 'low' ||
        value.details.priority === 'medium' ||
        value.details.priority === 'high') &&
      typeof value.details.nestedDetails === 'object' &&
      value.details.nestedDetails !== null &&
      !Array.isArray(value.details.nestedDetails) &&
      Number.isFinite(value.details.nestedDetails.nestedField1) &&
      typeof value.details.nestedDetails.nestedField2 === 'string'
    )
  }
  function check_Complex2_95_LoadingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'loading' &&
      typeof value.startedAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.progress) &&
      check_Complex2_95_InitialState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.loadingStep === 'string' &&
      Number.isFinite(value.nestedState.loadingProgress)
    )
  }
  function check_Complex2_95_ValidationState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'validating' &&
      typeof value.validationStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.steps) &&
      value.steps.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.stepName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.details !== undefined
            ? typeof value.details === 'string'
            : true)
      ) &&
      check_Complex2_95_LoadingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.validationStep === 'string' &&
      Number.isFinite(value.nestedState.validationProgress)
    )
  }
  function check_Complex2_95_ProcessingState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'processing' &&
      typeof value.processingStartedAt === 'string' &&
      typeof value.userId === 'string' &&
      Array.isArray(value.tasks) &&
      value.tasks.every(
        (value: any) =>
          typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.taskId === 'string' &&
          typeof value.taskName === 'string' &&
          typeof value.completed === 'boolean' &&
          (value.result !== undefined ? true : true)
      ) &&
      check_Complex2_95_ValidationState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.processingStep === 'string' &&
      Number.isFinite(value.nestedState.processingProgress)
    )
  }
  function check_Complex2_95_SuccessState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'success' &&
      typeof value.finishedAt === 'string' &&
      typeof value.userId === 'string' &&
      true &&
      'data' in value &&
      check_Complex2_95_ProcessingState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.successStep === 'string' &&
      Array.isArray(value.nestedState.successDetails) &&
      value.nestedState.successDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_ErrorState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'error' &&
      typeof value.errorOccurredAt === 'string' &&
      typeof value.userId === 'string' &&
      Number.isFinite(value.errorCode) &&
      typeof value.errorMessage === 'string' &&
      typeof value.retryable === 'boolean' &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.errorStep === 'string' &&
      Array.isArray(value.nestedState.errorDetails) &&
      value.nestedState.errorDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_RetryState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'retry' &&
      Number.isFinite(value.retryCount) &&
      typeof value.retryAfter === 'string' &&
      typeof value.userId === 'string' &&
      check_Complex2_95_ErrorState(value.previousState) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.retryStep === 'string' &&
      Array.isArray(value.nestedState.retryDetails) &&
      value.nestedState.retryDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_CompleteState(value: any): boolean {
    return (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value) &&
      value.status === 'complete' &&
      typeof value.completedAt === 'string' &&
      typeof value.userId === 'string' &&
      true &&
      'finalResult' in value &&
      (check_Complex2_95_SuccessState(value.previousState) ||
        check_Complex2_95_ErrorState(value.previousState)) &&
      typeof value.nestedState === 'object' &&
      value.nestedState !== null &&
      !Array.isArray(value.nestedState) &&
      typeof value.nestedState.completeStep === 'string' &&
      Array.isArray(value.nestedState.completeDetails) &&
      value.nestedState.completeDetails.every(
        (value: any) => typeof value === 'string'
      )
    )
  }
  function check_Complex2_95_WorkflowState(value: any): boolean {
    return (
      check_Complex2_95_InitialState(value) ||
      check_Complex2_95_LoadingState(value) ||
      check_Complex2_95_ValidationState(value) ||
      check_Complex2_95_ProcessingState(value) ||
      check_Complex2_95_SuccessState(value) ||
      check_Complex2_95_ErrorState(value) ||
      check_Complex2_95_RetryState(value) ||
      check_Complex2_95_CompleteState(value)
    )
  }
  return function check(value: any): value is Complex2_WorkflowState {
    return check_Complex2_95_WorkflowState(value)
  }
})()
