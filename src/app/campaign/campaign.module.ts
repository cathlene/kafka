import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CampaignController } from './controllers/campaign.controller';
import { Campaign } from './model/entities/campaign.entity';
import { CampaignService } from './services/campaign.service';

@Module({
  imports: [TypeOrmModule.forFeature([Campaign])],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
