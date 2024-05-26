import * as t from 'io-ts'

export type Complex2_InitialState = t.TypeOf<typeof Complex2_InitialState>
export const Complex2_InitialState = t.type({
  status: t.literal('initial'),
  createdAt: t.string,
  userId: t.string,
  details: t.type({
    description: t.string,
    priority: t.union([
      t.literal('low'),
      t.literal('medium'),
      t.literal('high')
    ]),
    nestedDetails: t.type({
      nestedField1: t.number,
      nestedField2: t.string
    })
  })
})

export type Complex2_LoadingState = t.TypeOf<typeof Complex2_LoadingState>
export const Complex2_LoadingState = t.type({
  status: t.literal('loading'),
  startedAt: t.string,
  userId: t.string,
  progress: t.number,
  previousState: Complex2_InitialState,
  nestedState: t.type({
    loadingStep: t.string,
    loadingProgress: t.number
  })
})

export type Complex2_ValidationState = t.TypeOf<typeof Complex2_ValidationState>
export const Complex2_ValidationState = t.type({
  status: t.literal('validating'),
  validationStartedAt: t.string,
  userId: t.string,
  steps: t.array(
    t.type({
      stepName: t.string,
      completed: t.boolean,
      details: t.union([t.undefined, t.string])
    })
  ),
  previousState: Complex2_LoadingState,
  nestedState: t.type({
    validationStep: t.string,
    validationProgress: t.number
  })
})

export type Complex2_ProcessingState = t.TypeOf<typeof Complex2_ProcessingState>
export const Complex2_ProcessingState = t.type({
  status: t.literal('processing'),
  processingStartedAt: t.string,
  userId: t.string,
  tasks: t.array(
    t.type({
      taskId: t.string,
      taskName: t.string,
      completed: t.boolean,
      result: t.union([t.undefined, t.any])
    })
  ),
  previousState: Complex2_ValidationState,
  nestedState: t.type({
    processingStep: t.string,
    processingProgress: t.number
  })
})

export type Complex2_SuccessState = t.TypeOf<typeof Complex2_SuccessState>
export const Complex2_SuccessState = t.type({
  status: t.literal('success'),
  finishedAt: t.string,
  userId: t.string,
  data: t.any,
  previousState: Complex2_ProcessingState,
  nestedState: t.type({
    successStep: t.string,
    successDetails: t.array(t.string)
  })
})

export type Complex2_ErrorState = t.TypeOf<typeof Complex2_ErrorState>
export const Complex2_ErrorState = t.type({
  status: t.literal('error'),
  errorOccurredAt: t.string,
  userId: t.string,
  errorCode: t.number,
  errorMessage: t.string,
  retryable: t.boolean,
  nestedState: t.type({
    errorStep: t.string,
    errorDetails: t.array(t.string)
  })
})

export type Complex2_RetryState = t.TypeOf<typeof Complex2_RetryState>
export const Complex2_RetryState = t.type({
  status: t.literal('retry'),
  retryCount: t.number,
  retryAfter: t.string,
  userId: t.string,
  previousState: Complex2_ErrorState,
  nestedState: t.type({
    retryStep: t.string,
    retryDetails: t.array(t.string)
  })
})

export type Complex2_CompleteState = t.TypeOf<typeof Complex2_CompleteState>
export const Complex2_CompleteState = t.type({
  status: t.literal('complete'),
  completedAt: t.string,
  userId: t.string,
  finalResult: t.any,
  previousState: t.union([Complex2_SuccessState, Complex2_ErrorState]),
  nestedState: t.type({
    completeStep: t.string,
    completeDetails: t.array(t.string)
  })
})

export type Complex2_WorkflowState = t.TypeOf<typeof Complex2_WorkflowState>
export const Complex2_WorkflowState = t.union([
  Complex2_InitialState,
  Complex2_LoadingState,
  Complex2_ValidationState,
  Complex2_ProcessingState,
  Complex2_SuccessState,
  Complex2_ErrorState,
  Complex2_RetryState,
  Complex2_CompleteState
])
