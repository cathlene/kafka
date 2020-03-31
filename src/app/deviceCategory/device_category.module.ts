import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceCategoryRepository } from './Repositories/deviceCategory.repository';
import { DeviceCategoryService } from './services/device_category.service';
import { DeviceCategoryController } from './controllers/device_category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeviceCategoryRepository])],
  providers: [DeviceCategoryService],
  controllers: [DeviceCategoryController],
})
export class deviceCategoryModule {}
