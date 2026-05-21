import { z } from "zod"

 export const createUserSchema = z.object({
    name: z.string().min(6, "O nome deve conter no minimo 6 caracteres."),
    email: z.email({ error: "Insira um e-mail válido!" }),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "Deve conter letra maiúsculas")
      .regex(/[a-z]/, "Deve conter letra minúsculas")
      .regex(/[0-9]/, "Deve conter número")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Deve conter simbolo"),
    passwordConfirmation: z.string()
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem!",
    path: ["passwordConfirmation"]
  });


  export type CreateUserSchema = z.infer<typeof createUserSchema>
