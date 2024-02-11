import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {
    const user = this.configService.get<string>('DATABASE_USER');
    const prod = this.configService.get<boolean>('PROD');
    console.table([{ user: user, prod: prod }]);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
