import { VideosService } from './../services/videos.service';
import { Controller, Get, BadRequestException, Param } from '@nestjs/common';
import { Video } from '../model/entities/videos.entity';

@Controller('videos')
export class VideosController {
  constructor(private videoService: VideosService) {}

  @Get()
  async getAllVideos(): Promise<Video[]> {
    try {
      return await this.videoService.getVideos();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
  @Get(':id_video')
  async getVideosData(@Param('id_video') id_video: string): Promise<Video> {
    try {
      return await this.videoService.getVideosData(id_video);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
