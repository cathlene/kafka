import { Module } from '@nestjs/common';
import { Device } from './model/entities/device.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceController } from './controllers/device.controller';
import { DeviceService } from './services/device.service';
import { DeviceRepository } from './Repositories/device.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceRepository])],
  providers: [DeviceService],
  controllers: [DeviceController],
})
export class DeviceModule {}
