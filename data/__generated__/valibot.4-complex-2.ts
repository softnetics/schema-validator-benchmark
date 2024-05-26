import * as v from 'valibot'

export type Complex2_InitialState = v.InferOutput<typeof Complex2_InitialState>
export const Complex2_InitialState = v.object({
  status: v.literal('initial'),
  createdAt: v.string(),
  userId: v.string(),
  details: v.object({
    description: v.string(),
    priority: v.union([
      v.literal('low'),
      v.literal('medium'),
      v.literal('high')
    ]),
    nestedDetails: v.object({
      nestedField1: v.number(),
      nestedField2: v.string()
    })
  })
})

export type Complex2_LoadingState = v.InferOutput<typeof Complex2_LoadingState>
export const Complex2_LoadingState = v.object({
  status: v.literal('loading'),
  startedAt: v.string(),
  userId: v.string(),
  progress: v.number(),
  previousState: Complex2_InitialState,
  nestedState: v.object({
    loadingStep: v.string(),
    loadingProgress: v.number()
  })
})

export type Complex2_ValidationState = v.InferOutput<
  typeof Complex2_ValidationState
>
export const Complex2_ValidationState = v.object({
  status: v.literal('validating'),
  validationStartedAt: v.string(),
  userId: v.string(),
  steps: v.array(
    v.object({
      stepName: v.string(),
      completed: v.boolean(),
      details: v.optional(v.string())
    })
  ),
  previousState: Complex2_LoadingState,
  nestedState: v.object({
    validationStep: v.string(),
    validationProgress: v.number()
  })
})

export type Complex2_ProcessingState = v.InferOutput<
  typeof Complex2_ProcessingState
>
export const Complex2_ProcessingState = v.object({
  status: v.literal('processing'),
  processingStartedAt: v.string(),
  userId: v.string(),
  tasks: v.array(
    v.object({
      taskId: v.string(),
      taskName: v.string(),
      completed: v.boolean(),
      result: v.optional(v.any())
    })
  ),
  previousState: Complex2_ValidationState,
  nestedState: v.object({
    processingStep: v.string(),
    processingProgress: v.number()
  })
})

export type Complex2_SuccessState = v.InferOutput<typeof Complex2_SuccessState>
export const Complex2_SuccessState = v.object({
  status: v.literal('success'),
  finishedAt: v.string(),
  userId: v.string(),
  data: v.any(),
  previousState: Complex2_ProcessingState,
  nestedState: v.object({
    successStep: v.string(),
    successDetails: v.array(v.string())
  })
})

export type Complex2_ErrorState = v.InferOutput<typeof Complex2_ErrorState>
export const Complex2_ErrorState = v.object({
  status: v.literal('error'),
  errorOccurredAt: v.string(),
  userId: v.string(),
  errorCode: v.number(),
  errorMessage: v.string(),
  retryable: v.boolean(),
  nestedState: v.object({
    errorStep: v.string(),
    errorDetails: v.array(v.string())
  })
})

export type Complex2_RetryState = v.InferOutput<typeof Complex2_RetryState>
export const Complex2_RetryState = v.object({
  status: v.literal('retry'),
  retryCount: v.number(),
  retryAfter: v.string(),
  userId: v.string(),
  previousState: Complex2_ErrorState,
  nestedState: v.object({
    retryStep: v.string(),
    retryDetails: v.array(v.string())
  })
})

export type Complex2_CompleteState = v.InferOutput<
  typeof Complex2_CompleteState
>
export const Complex2_CompleteState = v.object({
  status: v.literal('complete'),
  completedAt: v.string(),
  userId: v.string(),
  finalResult: v.any(),
  previousState: v.union([Complex2_SuccessState, Complex2_ErrorState]),
  nestedState: v.object({
    completeStep: v.string(),
    completeDetails: v.array(v.string())
  })
})
