import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PRIVATE_KEY_JWT: z.string(),
  PUBLIC_KEY_JWT: z.string(),
  PORT: z.coerce.number().optional().default(3333),
});

export type Env = z.infer<typeof envSchema>;
