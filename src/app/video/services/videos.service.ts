import { Video } from '../model/entities/videos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  async getVideos(): Promise<Video[]> {
    return await this.videoRepository.find();
  }

  async getVideosData(id_video: string | number): Promise<Video> {
    return await this.videoRepository.findOne(id_video);
  }
}
