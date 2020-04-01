import { EntityRepository, Repository } from 'typeorm';
import { DeviceCategory } from '../model/entities/device_category.entity';

@EntityRepository(DeviceCategory)
export class DeviceCategoryRepository extends Repository<DeviceCategory> {
  async getDeviceCategories(): Promise<DeviceCategory[]> {
    const query = this.createQueryBuilder('device_category');

    return await query.select('device_category.id_device_category,device_category.category_name').getRawMany();
  }
}
