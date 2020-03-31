import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { DeviceModule } from './device/device.module';
import { deviceCategoryModule } from './deviceCategory/device_category.module';
import { CampaignModule } from './campaign/campaign.module';
import { VideosModule } from './video/videos.module';
import { LocationModule } from './location/location.module';
import { EndUserModule } from './endUser/endUser.module';
import { CountryModule } from './country/country.module';

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
