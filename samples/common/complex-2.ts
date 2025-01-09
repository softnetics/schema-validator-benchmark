type Complex2_InitialState = {
  status: 'initial'
  createdAt: string // ISO 8601 date string
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

type Complex2_LoadingState = {
  status: 'loading'
  startedAt: string // ISO 8601 date string
  userId: string
  progress: number // 0 to 100
  previousState: Complex2_InitialState
  nestedState: {
    loadingStep: string
    loadingProgress: number
  }
}

type Complex2_ValidationState = {
  status: 'validating'
  validationStartedAt: string // ISO 8601 date string
  userId: string
  steps: {
    stepName: string
    completed: boolean
    details?: string
  }[]
  previousState: Complex2_LoadingState
  nestedState: {
    validationStep: string
    validationProgress: number
  }
}

type Complex2_ProcessingState = {
  status: 'processing'
  processingStartedAt: string // ISO 8601 date string
  userId: string
  tasks: {
    taskId: string
    taskName: string
    completed: boolean
    result?: any // Placeholder for actual task result type
  }[]
  previousState: Complex2_ValidationState
  nestedState: {
    processingStep: string
    processingProgress: number
  }
}

type Complex2_SuccessState = {
  status: 'success'
  finishedAt: string // ISO 8601 date string
  userId: string
  data: any // Placeholder for actual data type
  previousState: Complex2_ProcessingState
  nestedState: {
    successStep: string
    successDetails: string[]
  }
}

type Complex2_ErrorState = {
  status: 'error'
  errorOccurredAt: string // ISO 8601 date string
  userId: string
  errorCode: number
  errorMessage: string
  retryable: boolean
  nestedState: {
    errorStep: string
    errorDetails: string[]
  }
}

type Complex2_RetryState = {
  status: 'retry'
  retryCount: number
  retryAfter: string // ISO 8601 date string
  userId: string
  previousState: Complex2_ErrorState
  nestedState: {
    retryStep: string
    retryDetails: string[]
  }
}

type Complex2_CompleteState = {
  status: 'complete'
  completedAt: string // ISO 8601 date string
  userId: string
  finalResult: any // Placeholder for actual result type
  previousState: Complex2_SuccessState | Complex2_ErrorState
  nestedState: {
    completeStep: string
    completeDetails: string[]
  }
}

export type Complex2_WorkflowState =
  | Complex2_InitialState
  | Complex2_LoadingState
  | Complex2_ValidationState
  | Complex2_ProcessingState
  | Complex2_SuccessState
  | Complex2_ErrorState
  | Complex2_RetryState
  | Complex2_CompleteState
