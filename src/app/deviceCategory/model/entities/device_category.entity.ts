import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeviceCategory {
  @PrimaryGeneratedColumn()
  id_device_category: number;

  @Column()
  category_name: String;
}
