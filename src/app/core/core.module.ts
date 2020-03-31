import { Global, Module } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@devon4node/common/serializer';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { WinstonLogger } from '../shared/logger/winston.logger';
import { BusinessLogicFilter } from '../shared/filters/business-logic.filter';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/services/configuration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@devon4node/mailer';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Global()
@Module({
  imports: [
    UserModule,
    AuthModule,
    MailerModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: (config: ConfigurationService) => {
        return config.mailerConfig;
      },
      inject: [ConfigurationService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: (config: ConfigurationService) => {
        return config.database;
      },
      inject: [ConfigurationService],
    }),
    ConfigurationModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_FILTER, useClass: BusinessLogicFilter },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    WinstonLogger,
  ],
  exports: [UserModule, AuthModule, MailerModule, ConfigurationModule, WinstonLogger],
})
export class CoreModule {}
