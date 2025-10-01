import type { Resolver } from "react-hook-form";
import type { z } from "zod";

type AnyZodObject = z.ZodTypeAny;

type ResolverReturn<TFieldValues> = ReturnType<Resolver<TFieldValues>>;

type ResolverResult<TFieldValues> = Awaited<ResolverReturn<TFieldValues>>;

export function createZodResolver<TSchema extends AnyZodObject>(schema: TSchema) {
  const resolver: Resolver<z.infer<TSchema>> = async (values) => {
    const result = schema.safeParse(values);

    if (result.success) {
      return {
        values: result.data,
        errors: {}
      } as ResolverResult<z.infer<TSchema>>;
    }

    const errors: Record<string, any> = {};

    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path !== "string") continue;
      errors[path] = {
        type: issue.code,
        message: issue.message
      };
    }

    return {
      values: {},
      errors
    } as ResolverResult<z.infer<TSchema>>;
  };

  return resolver;
}
