import * as y from 'yup'

export type Complex2_InitialState = y.InferType<typeof Complex2_InitialState>
export const Complex2_InitialState = y.object({
  status: y
    .mixed((value): value is 'initial' => value === 'initial')
    .required(),
  createdAt: y.string().required(),
  userId: y.string().required(),
  details: y.object({
    description: y.string().required(),
    priority: y.mixed().oneOf(['low', 'medium', 'high']).required(),
    nestedDetails: y.object({
      nestedField1: y.number().required(),
      nestedField2: y.string().required()
    })
  })
})

export type Complex2_LoadingState = y.InferType<typeof Complex2_LoadingState>
export const Complex2_LoadingState = y.object({
  status: y
    .mixed((value): value is 'loading' => value === 'loading')
    .required(),
  startedAt: y.string().required(),
  userId: y.string().required(),
  progress: y.number().required(),
  previousState: Complex2_InitialState,
  nestedState: y.object({
    loadingStep: y.string().required(),
    loadingProgress: y.number().required()
  })
})

export type Complex2_ValidationState = y.InferType<
  typeof Complex2_ValidationState
>
export const Complex2_ValidationState = y.object({
  status: y
    .mixed((value): value is 'validating' => value === 'validating')
    .required(),
  validationStartedAt: y.string().required(),
  userId: y.string().required(),
  steps: y.array(
    y.object({
      stepName: y.string().required(),
      completed: y.boolean().required(),
      details: y.string().required().optional()
    })
  ),
  previousState: Complex2_LoadingState,
  nestedState: y.object({
    validationStep: y.string().required(),
    validationProgress: y.number().required()
  })
})

export type Complex2_ProcessingState = y.InferType<
  typeof Complex2_ProcessingState
>
export const Complex2_ProcessingState = y.object({
  status: y
    .mixed((value): value is 'processing' => value === 'processing')
    .required(),
  processingStartedAt: y.string().required(),
  userId: y.string().required(),
  tasks: y.array(
    y.object({
      taskId: y.string().required(),
      taskName: y.string().required(),
      completed: y.boolean().required(),
      result: y
        .mixed((value): value is any => true)
        .required()
        .optional()
    })
  ),
  previousState: Complex2_ValidationState,
  nestedState: y.object({
    processingStep: y.string().required(),
    processingProgress: y.number().required()
  })
})

export type Complex2_SuccessState = y.InferType<typeof Complex2_SuccessState>
export const Complex2_SuccessState = y.object({
  status: y
    .mixed((value): value is 'success' => value === 'success')
    .required(),
  finishedAt: y.string().required(),
  userId: y.string().required(),
  data: y.mixed((value): value is any => true).required(),
  previousState: Complex2_ProcessingState,
  nestedState: y.object({
    successStep: y.string().required(),
    successDetails: y.array(y.string().required())
  })
})

export type Complex2_ErrorState = y.InferType<typeof Complex2_ErrorState>
export const Complex2_ErrorState = y.object({
  status: y.mixed((value): value is 'error' => value === 'error').required(),
  errorOccurredAt: y.string().required(),
  userId: y.string().required(),
  errorCode: y.number().required(),
  errorMessage: y.string().required(),
  retryable: y.boolean().required(),
  nestedState: y.object({
    errorStep: y.string().required(),
    errorDetails: y.array(y.string().required())
  })
})

export type Complex2_RetryState = y.InferType<typeof Complex2_RetryState>
export const Complex2_RetryState = y.object({
  status: y.mixed((value): value is 'retry' => value === 'retry').required(),
  retryCount: y.number().required(),
  retryAfter: y.string().required(),
  userId: y.string().required(),
  previousState: Complex2_ErrorState,
  nestedState: y.object({
    retryStep: y.string().required(),
    retryDetails: y.array(y.string().required())
  })
})

export type Complex2_CompleteState = y.InferType<typeof Complex2_CompleteState>
export const Complex2_CompleteState = y.object({
  status: y
    .mixed((value): value is 'complete' => value === 'complete')
    .required(),
  completedAt: y.string().required(),
  userId: y.string().required(),
  finalResult: y.mixed((value): value is any => true).required(),
  previousState: y
    .mixed()
    .oneOf([Complex2_SuccessState, Complex2_ErrorState])
    .required(),
  nestedState: y.object({
    completeStep: y.string().required(),
    completeDetails: y.array(y.string().required())
  })
})
