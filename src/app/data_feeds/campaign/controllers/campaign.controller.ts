import { Controller, Get, BadRequestException, Param } from '@nestjs/common';
import { Campaign } from '../model/entities/campaign.entity';
import { CampaignService } from '../services/campaign.service';

@Controller('campaign')
export class CampaignController {
  constructor(private campaignService: CampaignService) {}

  @Get()
  async getCampaigns(): Promise<Campaign[]> {
    try {
      return await this.campaignService.getCampaigns();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
  @Get(':id_campaign')
  async getCampaign(@Param('id_campaign') id_campaign: number): Promise<Campaign> {
    try {
      return await this.campaignService.getCampaign(id_campaign);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
