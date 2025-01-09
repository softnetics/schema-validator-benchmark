import { Type, Static } from '@sinclair/typebox'


type Complex2_InitialState = Static<typeof Complex2_InitialState>
const Complex2_InitialState = Type.Object({
status: Type.Literal('initial'),
createdAt: Type.String(),
userId: Type.String(),
details: Type.Object({
description: Type.String(),
priority: Type.Union([
Type.Literal('low'),
Type.Literal('medium'),
Type.Literal('high')
]),
nestedDetails: Type.Object({
nestedField1: Type.Number(),
nestedField2: Type.String()
})
})
})

type Complex2_LoadingState = Static<typeof Complex2_LoadingState>
const Complex2_LoadingState = Type.Object({
status: Type.Literal('loading'),
startedAt: Type.String(),
userId: Type.String(),
progress: Type.Number(),
previousState: Complex2_InitialState,
nestedState: Type.Object({
loadingStep: Type.String(),
loadingProgress: Type.Number()
})
})

type Complex2_ValidationState = Static<typeof Complex2_ValidationState>
const Complex2_ValidationState = Type.Object({
status: Type.Literal('validating'),
validationStartedAt: Type.String(),
userId: Type.String(),
steps: Type.Array(Type.Object({
stepName: Type.String(),
completed: Type.Boolean(),
details: Type.Optional(Type.String())
})),
previousState: Complex2_LoadingState,
nestedState: Type.Object({
validationStep: Type.String(),
validationProgress: Type.Number()
})
})

type Complex2_ProcessingState = Static<typeof Complex2_ProcessingState>
const Complex2_ProcessingState = Type.Object({
status: Type.Literal('processing'),
processingStartedAt: Type.String(),
userId: Type.String(),
tasks: Type.Array(Type.Object({
taskId: Type.String(),
taskName: Type.String(),
completed: Type.Boolean(),
result: Type.Optional(Type.Any())
})),
previousState: Complex2_ValidationState,
nestedState: Type.Object({
processingStep: Type.String(),
processingProgress: Type.Number()
})
})

type Complex2_SuccessState = Static<typeof Complex2_SuccessState>
const Complex2_SuccessState = Type.Object({
status: Type.Literal('success'),
finishedAt: Type.String(),
userId: Type.String(),
data: Type.Any(),
previousState: Complex2_ProcessingState,
nestedState: Type.Object({
successStep: Type.String(),
successDetails: Type.Array(Type.String())
})
})

type Complex2_ErrorState = Static<typeof Complex2_ErrorState>
const Complex2_ErrorState = Type.Object({
status: Type.Literal('error'),
errorOccurredAt: Type.String(),
userId: Type.String(),
errorCode: Type.Number(),
errorMessage: Type.String(),
retryable: Type.Boolean(),
nestedState: Type.Object({
errorStep: Type.String(),
errorDetails: Type.Array(Type.String())
})
})

type Complex2_RetryState = Static<typeof Complex2_RetryState>
const Complex2_RetryState = Type.Object({
status: Type.Literal('retry'),
retryCount: Type.Number(),
retryAfter: Type.String(),
userId: Type.String(),
previousState: Complex2_ErrorState,
nestedState: Type.Object({
retryStep: Type.String(),
retryDetails: Type.Array(Type.String())
})
})

type Complex2_CompleteState = Static<typeof Complex2_CompleteState>
const Complex2_CompleteState = Type.Object({
status: Type.Literal('complete'),
completedAt: Type.String(),
userId: Type.String(),
finalResult: Type.Any(),
previousState: Type.Union([
Complex2_SuccessState,
Complex2_ErrorState
]),
nestedState: Type.Object({
completeStep: Type.String(),
completeDetails: Type.Array(Type.String())
})
})

export type Complex2_WorkflowState = Static<typeof Complex2_WorkflowState>
export const Complex2_WorkflowState = Type.Union([
Complex2_InitialState,
Complex2_LoadingState,
Complex2_ValidationState,
Complex2_ProcessingState,
Complex2_SuccessState,
Complex2_ErrorState,
Complex2_RetryState,
Complex2_CompleteState
])