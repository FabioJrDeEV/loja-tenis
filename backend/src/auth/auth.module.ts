import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_IN) },
    }),
  ],

  controllers: [UsersController],
  providers: [AuthService, PrismaService],
})
export class UsersModule {}
