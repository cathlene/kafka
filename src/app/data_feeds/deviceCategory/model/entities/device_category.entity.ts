import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DEVICE_CATEGORY')
export class DeviceCategory {
  @PrimaryGeneratedColumn()
  id_device_category: number;

  @Column()
  category_name: String;
}
