import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Country } from '../../../country/model/entities/country.entity';

@Entity()
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

  @Column({
    name: 'PHONE_NUMBER',
  })
  phone_number: string;

  @OneToOne(
    type => Country,
    (country: Country) => country.id_country,
    { eager: true },
  )
  @JoinColumn({ name: 'id_country' })
  country: Country;
}
