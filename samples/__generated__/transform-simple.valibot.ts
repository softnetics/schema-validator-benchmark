import * as v from 'valibot'

export type TransformSimple_ModelInput = v.InferInput<typeof TransformSimple_Model>
export type TransformSimple_ModelOutput = v.InferOutput<typeof TransformSimple_Model>
export const TransformSimple_Model = v.pipe(
  v.object({
    a: v.number(),
    b: v.string(),
    c: v.boolean(),
    d: v.array(
      v.object({
        a: v.date(),
        b: v.string(),
      })
    ),
  }),
  v.transform((input) => {
    return {
      x: `${input.a}`,
      y: `${input.b}`,
      z: `${input.c}`,
      l: input.d.map((item) => {
        return {
          a: item.a.toISOString(),
          b: item.b,
        }
      }),
    }
  })
)
