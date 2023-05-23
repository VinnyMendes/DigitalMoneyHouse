import * as z from "zod";

export const cardSchema = z.object({
  number_id: z
    .string()
    .min(11, "Campo obrigatário")
    .nonempty("Campo obrigatário")
    .transform((value) => (value ? Number(value.replaceAll(" ", "")) : 0)),
  expiration_date: z
    .string()
    .nonempty("Campo obrigatário")
    .min(7, "Deve possuir no mínimo sete caracteres"),
  first_last_name: z
    .string()
    .nonempty("Campo obrigatário")
    .min(4, "Deve possuir no mínimo quatro caracteres"),
  cod: z
    .string()
    .nonempty("Campo obrigatário")
    .transform((value) => (value ? Number(value) : 0)),
});

export type cardInferSchemaType = z.infer<typeof cardSchema>;
// "cod": 0,
// "expiration_date": "08/2025",
// "first_last_name": "string",
// "number_id": 0
