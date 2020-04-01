import { Module } from '@nestjs/common';
import { LocationService } from './services/location.service';
import { LocationController } from './controllers/location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationRepository } from './repositories/location.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([LocationRepository])
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
