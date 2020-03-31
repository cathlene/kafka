import { IConfig } from '../app/core/configuration/model/types';
import { join } from 'path';

const def: IConfig = {
  isDev: true,
  host: 'localhost',
  port: 3000,
  clientUrl: 'localhost:4200',
  globalPrefix: 'v1',
  database: {
    type: 'sqlite',
    database: ':memory:',
    synchronize: false,
    migrationsRun: true,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/**/*.js'],
    subscribers: ['dist/subscriber/**/*.js'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },
  mailerConfig: {
    mailOptions: {
      host: 'localhost',
      port: 1025,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    },
    emailFrom: 'noreply@example.com',
    hbsOptions: {
      templatesDir: join(__dirname, '../..', 'templates/views'),
      partialsDir: join(__dirname, '../..', 'templates/partials'),
      helpers: [],
    },
  },
  swaggerConfig: {
    swaggerTitle: 'NestJS Application',
    swaggerDescription: 'API Documentation',
    swaggerVersion: '0.0.1',
  },
  jwtConfig: { secret: 'SECRET', signOptions: { expiresIn: '24h' } },
};

export default def;
