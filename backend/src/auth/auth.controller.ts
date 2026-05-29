import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserSchema } from '../schemas/create-user-schema';
import type { CreateUserSchema } from '../schemas/create-user-schema';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { signIn, type SignIn } from '../schemas/signin-user-schema';

@Controller('auth')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body(new ZodValidationPipe(createUserSchema)) body: CreateUserSchema,
  ) {
    return await this.authService.signup(body);
  }

  @Post('signin')
  async signin(@Body(new ZodValidationPipe(signIn)) body: SignIn) {
    return await this.authService.signin(body);
  }
}
