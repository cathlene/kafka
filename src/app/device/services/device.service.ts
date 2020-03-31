import { Injectable } from '@nestjs/common';
import { Device } from '../model/entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceRepository } from '../Repositories/device.repository';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(DeviceRepository)
    private deviceRepository: DeviceRepository,
  ) {}

  async getDevices(): Promise<Device[]> {
    return this.deviceRepository.getDevices();
  }
  async getDevice(id_device: number): Promise<Device> {
    return this.deviceRepository.getDevice(id_device);
  }
}
