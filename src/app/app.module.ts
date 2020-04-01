import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { DeviceModule } from './data_feeds/device/device.module';
import { deviceCategoryModule } from './data_feeds/deviceCategory/device_category.module';
import { CampaignModule } from './data_feeds/campaign/campaign.module';
import { VideosModule } from './data_feeds/video/videos.module';
import { LocationModule } from './data_feeds/location/location.module';
import { EndUserModule } from './data_feeds/endUser/endUser.module';
import { CountryModule } from './data_feeds/country/country.module';

@Module({
  imports: [
    CoreModule,
    DeviceModule,
    deviceCategoryModule,
    VideosModule,
    CampaignModule,
    CountryModule,
    LocationModule,
    EndUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
