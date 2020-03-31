import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { DeviceCategory } from '../../../deviceCategory/model/entities/device_category.entity';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id_device: number;

  @Column()
  device_model: String;

  @Column()
  device_brand: string;

  @OneToOne(
    type => DeviceCategory,
    (deviceCategory: DeviceCategory) => deviceCategory.id_device_category,
    { eager: true },
  )
  @JoinColumn({ name: 'id_device_category', referencedColumnName: 'id_device_category' })
  deviceCategory: DeviceCategory;
}
