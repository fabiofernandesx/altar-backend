import z from 'zod'

const envSchema = z.object({
  CLIENT_URL: z.string(),
  PORT: z.coerce.number(),
})

export const strictEnv = envSchema.parse(process.env)
