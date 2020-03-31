import { Controller, Get, Body, BadRequestException, Query, ValidationPipe, Param, Post } from '@nestjs/common';
import { Device } from '../model/entities/device.entity';
import { DeviceService } from '../services/device.service';

@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  async getAllDevices(): Promise<Array<Device>> {
    try {
      return await this.deviceService.getDevices();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }

  @Get(':device_id')
  async getDevice(@Param('device_id') device_id): Promise<Device> {
    try {
      return await this.deviceService.getDevice(device_id);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
