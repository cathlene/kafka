import { EntityRepository, Repository } from 'typeorm';
import { Video } from '../model/entities/videos.entity';

@EntityRepository(Video)
export class VideosRepository extends Repository<Video> {
  async getVideos(): Promise<Video[]> {
    return this.find();
  }

  async getVideo(idvideo: number): Promise<Video[]> {
    return this.find({ id_video: idvideo });
  }
}
