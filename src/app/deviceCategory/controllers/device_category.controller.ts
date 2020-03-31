import { Controller, Get, Body, BadRequestException, Query, ValidationPipe, Param, Post } from '@nestjs/common';
import { DeviceCategoryService } from '../services/device_category.service';
import { DeviceCategory } from '../model/entities/device_category.entity';

@Controller('device_category')
export class DeviceCategoryController {
  constructor(private readonly deviceCategoryService: DeviceCategoryService) {}

  @Get()
  async getAllDeviceCategories(): Promise<DeviceCategory[]> {
    try {
      return await this.deviceCategoryService.getAllDeviceCategories();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
