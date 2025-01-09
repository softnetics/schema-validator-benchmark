import * as z from 'zod'

type TransformSimple_ModelInput = z.input<typeof TransformSimple_Model>
type TransformSimple_ModelOutput = z.output<typeof TransformSimple_Model>
export const TransformSimple_Model = z
  .object({
    a: z.number(),
    b: z.string(),
    c: z.boolean(),
    d: z.array(
      z.object({
        a: z.date(),
        b: z.string(),
      })
    ),
  })
  .transform((input) => {
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
