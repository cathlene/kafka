import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Video } from '../../../video/model/entities/videos.entity';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id_campaign: number;

  @Column()
  title: string;
}
