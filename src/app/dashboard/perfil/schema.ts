import * as z from "zod";

export const FormProfileForm = z.object({
  email: z.string().nonempty().email({ message: "Email inválido" }),
  name: z.string().nonempty({ message: "Campo obrigatório" }),
  cpf: z.string().nonempty({ message: "Campo obrigatório" }),
  phone: z.string().nonempty({ message: "Campo obrigatório" }),
  password: z.string().nonempty({ message: "Campo obrigatório" }),
});

export type TypeFormProfileForm = z.infer<typeof FormProfileForm>;
