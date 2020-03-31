import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Country } from '../../../country/model/entities/country.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id_location: number;

  @Column()
  location_name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(
    type => Country,
    (country: Country) => country.id_country,
    { eager: true },
  )
  @JoinColumn({ name: 'id_country' })
  country: Country;
}
