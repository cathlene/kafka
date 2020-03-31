import { ConnectionOptions } from 'typeorm';
import { MailerModuleOptions } from '@devon4node/mailer';
import { JwtModuleOptions } from '@nestjs/jwt';

export interface IConfig {
  isDev: boolean;
  host: string;
  port: number;
  clientUrl: string;
  globalPrefix: string;
  database: ConnectionOptions;
  mailerConfig: MailerModuleOptions;
  swaggerConfig: ISwaggerConfig;
  jwtConfig: JwtModuleOptions;
}

export interface ISwaggerConfig {
  swaggerTitle: string;
  swaggerDescription: string;
  swaggerVersion: string;
}
