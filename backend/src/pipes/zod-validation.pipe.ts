import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import type { ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}
  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch {
      throw new BadRequestException('Validation failed');
    }
  }
}
