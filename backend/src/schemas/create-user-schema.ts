import { z } from 'zod';

export const createUserSchema = z
  .object({
    name: z.string().min(6),
    email: z.email(),
    password: z
      .string()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        'Senha deve conter maiúscula, minúscula, número e símbolo',
      ),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirmation'],
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
