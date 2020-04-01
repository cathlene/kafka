import { EntityRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from '../model/entities/device.entity';

@EntityRepository(Device)
export class DeviceRepository extends Repository<Device> {
  async getDevices(): Promise<Device[]> {
    return await this.find();
  }

  async getDevice(id_device: number): Promise<Device> {
    return await this.findOne(id_device);
  }
}
