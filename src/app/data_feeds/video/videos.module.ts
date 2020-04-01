import { Video } from './model/entities/videos.entity';
import { VideosRepository } from './Repositories/videos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VideosController } from './controllers/videos.controller';
import { VideosService } from './services/videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
