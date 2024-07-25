import z from 'zod'

const envSchema = z.object({
  ARRAY_SIZE: z.coerce.number(),
  BIAS_WEIGHT: z.coerce.number(),
  CLIENT_URL: z.string(),
  PORT: z.coerce.number(),
})

export const strictEnv = envSchema.parse(process.env)
