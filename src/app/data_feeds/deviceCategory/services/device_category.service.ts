import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceCategory } from '../model/entities/device_category.entity';
import { DeviceCategoryRepository } from '../Repositories/deviceCategory.repository';

@Injectable()
export class DeviceCategoryService {
  constructor(
    @InjectRepository(DeviceCategoryRepository)
    private deviceCategoryRepository: DeviceCategoryRepository,
  ) {}

  async getAllDeviceCategories(): Promise<DeviceCategory[]> {
    return this.deviceCategoryRepository.getDeviceCategories();
  }
}
