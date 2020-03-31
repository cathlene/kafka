import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EndUserRepository } from './repositories/endUser.repositories';
import { EndUserController } from './controllers/endUser.controller';
import { EndUserService } from './services/endUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([EndUserRepository])],
  controllers: [EndUserController],
  providers: [EndUserService],
})
export class EndUserModule {}
