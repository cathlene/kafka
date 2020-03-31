import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Campaign } from '../../../campaign/model/entities/campaign.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id_video: number;

  @Column()
  title: string;

  @Column()
  date_creation: Date;

  @ManyToOne(
    type => Campaign,
    (campaign: Campaign) => campaign.id_campaign,
    { eager: true },
  )
  @JoinColumn({ name: 'id_campaign', referencedColumnName: 'id_campaign' })
  campaign: Campaign;
}
