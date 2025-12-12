import { z } from "zod";

// ✅ Schema uses the actual env var names (with NEXT_PUBLIC_ prefix)
const envConfigSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default("Keen Agile"),
  NEXT_PUBLIC_APP_VERSION: z.string().default("1.0.0"),
  NEXT_PUBLIC_APP_HOST: z.string().default("localhost"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  APP_PORT: z
    .string()
    .default("3000")
    .transform((val) => Number(val)),
});

// ✅ Validate process.env
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid app environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Map validated vars to clean keys
export const envAppConfig = Object.freeze({
  APP_NAME: parsed.data.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: parsed.data.NEXT_PUBLIC_APP_VERSION,
  APP_HOST: parsed.data.NEXT_PUBLIC_APP_HOST,
  NODE_ENV: parsed.data.NODE_ENV,
  APP_PORT: parsed.data.APP_PORT,
});

// ✅ Optional: Type-safe config
export type EnvAppConfig = typeof envAppConfig;
