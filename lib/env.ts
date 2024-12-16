import zod from "zod";

const envSchema = zod.object({
  API_BASE_URL: zod.string().optional().default("https://fakestoreapi.com"),
});
export const env = envSchema.parse(process.env);
