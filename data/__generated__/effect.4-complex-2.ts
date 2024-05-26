import { Schema as ET } from '@effect/schema/Schema'
import { Schema as ES } from '@effect/schema'

export type Complex2_InitialState = ET.Type<typeof Complex2_InitialState>
export const Complex2_InitialState = ES.Struct({
  status: ES.Literal('initial'),
  createdAt: ES.String,
  userId: ES.String,
  details: ES.Struct({
    description: ES.String,
    priority: ES.Union(
      ES.Literal('low'),
      ES.Literal('medium'),
      ES.Literal('high')
    ),
    nestedDetails: ES.Struct({
      nestedField1: ES.Number,
      nestedField2: ES.String
    })
  })
})

export type Complex2_LoadingState = ET.Type<typeof Complex2_LoadingState>
export const Complex2_LoadingState = ES.Struct({
  status: ES.Literal('loading'),
  startedAt: ES.String,
  userId: ES.String,
  progress: ES.Number,
  previousState: Complex2_InitialState,
  nestedState: ES.Struct({
    loadingStep: ES.String,
    loadingProgress: ES.Number
  })
})

export type Complex2_ValidationState = ET.Type<typeof Complex2_ValidationState>
export const Complex2_ValidationState = ES.Struct({
  status: ES.Literal('validating'),
  validationStartedAt: ES.String,
  userId: ES.String,
  steps: ES.Array(
    ES.Struct({
      stepName: ES.String,
      completed: ES.Boolean,
      details: ES.optional(ES.String)
    })
  ),
  previousState: Complex2_LoadingState,
  nestedState: ES.Struct({
    validationStep: ES.String,
    validationProgress: ES.Number
  })
})

export type Complex2_ProcessingState = ET.Type<typeof Complex2_ProcessingState>
export const Complex2_ProcessingState = ES.Struct({
  status: ES.Literal('processing'),
  processingStartedAt: ES.String,
  userId: ES.String,
  tasks: ES.Array(
    ES.Struct({
      taskId: ES.String,
      taskName: ES.String,
      completed: ES.Boolean,
      result: ES.optional(ES.Any)
    })
  ),
  previousState: Complex2_ValidationState,
  nestedState: ES.Struct({
    processingStep: ES.String,
    processingProgress: ES.Number
  })
})

export type Complex2_SuccessState = ET.Type<typeof Complex2_SuccessState>
export const Complex2_SuccessState = ES.Struct({
  status: ES.Literal('success'),
  finishedAt: ES.String,
  userId: ES.String,
  data: ES.Any,
  previousState: Complex2_ProcessingState,
  nestedState: ES.Struct({
    successStep: ES.String,
    successDetails: ES.Array(ES.String)
  })
})

export type Complex2_ErrorState = ET.Type<typeof Complex2_ErrorState>
export const Complex2_ErrorState = ES.Struct({
  status: ES.Literal('error'),
  errorOccurredAt: ES.String,
  userId: ES.String,
  errorCode: ES.Number,
  errorMessage: ES.String,
  retryable: ES.Boolean,
  nestedState: ES.Struct({
    errorStep: ES.String,
    errorDetails: ES.Array(ES.String)
  })
})

export type Complex2_RetryState = ET.Type<typeof Complex2_RetryState>
export const Complex2_RetryState = ES.Struct({
  status: ES.Literal('retry'),
  retryCount: ES.Number,
  retryAfter: ES.String,
  userId: ES.String,
  previousState: Complex2_ErrorState,
  nestedState: ES.Struct({
    retryStep: ES.String,
    retryDetails: ES.Array(ES.String)
  })
})

export type Complex2_CompleteState = ET.Type<typeof Complex2_CompleteState>
export const Complex2_CompleteState = ES.Struct({
  status: ES.Literal('complete'),
  completedAt: ES.String,
  userId: ES.String,
  finalResult: ES.Any,
  previousState: ES.Union(Complex2_SuccessState, Complex2_ErrorState),
  nestedState: ES.Struct({
    completeStep: ES.String,
    completeDetails: ES.Array(ES.String)
  })
})

export type Complex2_WorkflowState = ET.Type<typeof Complex2_WorkflowState>
export const Complex2_WorkflowState = ES.Union(
  Complex2_InitialState,
  Complex2_LoadingState,
  Complex2_ValidationState,
  Complex2_ProcessingState,
  Complex2_SuccessState,
  Complex2_ErrorState,
  Complex2_RetryState,
  Complex2_CompleteState
)
