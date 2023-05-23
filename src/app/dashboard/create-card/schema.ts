import * as z from "zod";

export const cardSchema = z.object({
  cardNumber: z.string().email("E-mail inválido").nonempty("Campo obrigatório"),
  validDate: z.string().nonempty("Campo obrigatário"),
  fullName: z.string().nonempty("Campo obrigatário"),
  cvv: z.string().nonempty("Campo obrigatário"),
});

export type cardInferSchemaType = z.infer<typeof cardSchema>;
