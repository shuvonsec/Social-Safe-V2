import type { FieldErrors, Resolver } from "react-hook-form";
import type { z } from "zod";

type AnyZodObject = z.ZodTypeAny;

type ResolverResult<TSchema extends AnyZodObject> = Awaited<
  ReturnType<Resolver<z.infer<TSchema>>>
>;

export function createZodResolver<TSchema extends AnyZodObject>(schema: TSchema) {
  const resolver: Resolver<z.infer<TSchema>> = async (values) => {
    const result = schema.safeParse(values);

    if (result.success) {
      return {
        values: result.data,
        errors: {}
      } as ResolverResult<z.infer<TSchema>>;
    }

    const errors: FieldErrors<z.infer<TSchema>> = {};

    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path !== "string") continue;
      const key = path as keyof z.infer<TSchema>;
      errors[key] = {
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
