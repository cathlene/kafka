import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Device } from '../model/entities/device.entity';

@Injectable()
export class DeviceCrudService extends TypeOrmCrudService<Device> {
  constructor(@InjectRepository(Device) repo: Repository<Device>) {
    super(repo);
  }
}
