import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COUNTRY')
export class Country {
  @PrimaryGeneratedColumn()
  id_country: number;

  @Column()
  country_code: string;

  @Column()
  country_name: string;
}
