import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Country } from '../../../country/model/entities/country.entity';

@Entity('END_USER')
export class EndUser {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  birth_date: Date;

  @Column()
  phone_number: string;

  @OneToOne(
    type => Country,
    (country: Country) => country.id_country,
    { eager: true },
  )
  @JoinColumn({ name: 'id_country' })
  country: Country;
}
