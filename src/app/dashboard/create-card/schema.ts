import * as z from "zod";

export const cardSchema = z.object({
  number_id: z
    .string()
    .nonempty("Campo obrigatário")
    .superRefine((value, ctx) => {
      if (
        value.replaceAll(" ", "").replaceAll("_", "").replaceAll("/", "").trim()
          .length < 16
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Deve possuir no mínimo 16 caracteres",
        });
      }
    })
    .transform((value) =>
      value ? Number(value.replaceAll(" ", "").replaceAll("_", "")) : 0
    ),
  expiration_date: z
    .string()
    .nonempty("Campo obrigatário")
    .superRefine((value, ctx) => {
      const [month, year] = value.split("/");

      if (year) {
        const formattedYear = Number(year);

        if (formattedYear < 2000) {
          ctx.addIssue({
            code: "custom",
            message: "Ano inválido",
          });
        }
      }

      if (
        value.replaceAll(" ", "").replaceAll("_", "").replaceAll("/", "").trim()
          .length < 6
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Deve possuir no mínimo 6 caracteres",
        });
      }
    })
    .transform((value) => value && value.replaceAll("_", "")),
  first_last_name: z
    .string()
    .nonempty("Campo obrigatário")
    .min(4, "Deve possuir no mínimo quatro caracteres"),
  cod: z
    .string()
    .nonempty("Campo obrigatário")
    .superRefine((value, ctx) => {
      if (value.replaceAll(" ", "").replaceAll("_", "").trim().length < 3) {
        ctx.addIssue({
          code: "custom",
          message: "Deve possuir no mínimo trés caracteres",
        });
      }
    })
    .transform((value) =>
      value ? Number(value.replaceAll(" ", "").replaceAll("_", "").trim()) : 0
    ),
});

export type cardInferSchemaType = z.infer<typeof cardSchema>;
// "cod": 0,
// "expiration_date": "08/2025",
// "first_last_name": "string",
// "number_id": 0
