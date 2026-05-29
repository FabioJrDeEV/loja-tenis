import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserSchema } from '../schemas/create-user-schema';
import bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignIn } from '../schemas/signin-user-schema';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(createUser: CreateUserSchema) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordConfirmation, ...userData } = createUser;

    const passwordHashed = await bcrypt.hash(userData.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          ...userData,
          password: passwordHashed,
        },
      });
      return user;
    } catch {
      throw new BadRequestException('Email already exists');
    }
  }

  async signin(signIn: SignIn): Promise<{ acess_token: string }> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signIn.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const hashedMath = await bcrypt.compare(signIn.password, user.password);

    if (!hashedMath) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }
}
