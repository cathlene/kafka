import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Campaign } from '../model/entities/campaign.entity';

@Injectable()
export class CampaignService {
  constructor(
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>,
  ) {}

  async getCampaigns(): Promise<Campaign[]> {
    return await this.campaignRepository.find();
  }

  async getCampaign(id_campaign: number): Promise<Campaign> {
    return await this.campaignRepository.findOne(id_campaign);
  }
}
