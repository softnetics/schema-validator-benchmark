import { z } from 'zod'

export type Complex2_InitialState = z.infer<typeof Complex2_InitialState>
export const Complex2_InitialState = z.object({
  status: z.literal('initial'),
  createdAt: z.string(),
  userId: z.string(),
  details: z.object({
    description: z.string(),
    priority: z.union([
      z.literal('low'),
      z.literal('medium'),
      z.literal('high')
    ]),
    nestedDetails: z.object({
      nestedField1: z.number(),
      nestedField2: z.string()
    })
  })
})

export type Complex2_LoadingState = z.infer<typeof Complex2_LoadingState>
export const Complex2_LoadingState = z.object({
  status: z.literal('loading'),
  startedAt: z.string(),
  userId: z.string(),
  progress: z.number(),
  previousState: Complex2_InitialState,
  nestedState: z.object({
    loadingStep: z.string(),
    loadingProgress: z.number()
  })
})

export type Complex2_ValidationState = z.infer<typeof Complex2_ValidationState>
export const Complex2_ValidationState = z.object({
  status: z.literal('validating'),
  validationStartedAt: z.string(),
  userId: z.string(),
  steps: z.array(
    z.object({
      stepName: z.string(),
      completed: z.boolean(),
      details: z.string().optional()
    })
  ),
  previousState: Complex2_LoadingState,
  nestedState: z.object({
    validationStep: z.string(),
    validationProgress: z.number()
  })
})

export type Complex2_ProcessingState = z.infer<typeof Complex2_ProcessingState>
export const Complex2_ProcessingState = z.object({
  status: z.literal('processing'),
  processingStartedAt: z.string(),
  userId: z.string(),
  tasks: z.array(
    z.object({
      taskId: z.string(),
      taskName: z.string(),
      completed: z.boolean(),
      result: z.any().optional()
    })
  ),
  previousState: Complex2_ValidationState,
  nestedState: z.object({
    processingStep: z.string(),
    processingProgress: z.number()
  })
})

export type Complex2_SuccessState = z.infer<typeof Complex2_SuccessState>
export const Complex2_SuccessState = z.object({
  status: z.literal('success'),
  finishedAt: z.string(),
  userId: z.string(),
  data: z.any(),
  previousState: Complex2_ProcessingState,
  nestedState: z.object({
    successStep: z.string(),
    successDetails: z.array(z.string())
  })
})

export type Complex2_ErrorState = z.infer<typeof Complex2_ErrorState>
export const Complex2_ErrorState = z.object({
  status: z.literal('error'),
  errorOccurredAt: z.string(),
  userId: z.string(),
  errorCode: z.number(),
  errorMessage: z.string(),
  retryable: z.boolean(),
  nestedState: z.object({
    errorStep: z.string(),
    errorDetails: z.array(z.string())
  })
})

export type Complex2_RetryState = z.infer<typeof Complex2_RetryState>
export const Complex2_RetryState = z.object({
  status: z.literal('retry'),
  retryCount: z.number(),
  retryAfter: z.string(),
  userId: z.string(),
  previousState: Complex2_ErrorState,
  nestedState: z.object({
    retryStep: z.string(),
    retryDetails: z.array(z.string())
  })
})

export type Complex2_CompleteState = z.infer<typeof Complex2_CompleteState>
export const Complex2_CompleteState = z.object({
  status: z.literal('complete'),
  completedAt: z.string(),
  userId: z.string(),
  finalResult: z.any(),
  previousState: z.union([Complex2_SuccessState, Complex2_ErrorState]),
  nestedState: z.object({
    completeStep: z.string(),
    completeDetails: z.array(z.string())
  })
})
