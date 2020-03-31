import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Video } from '../model/entities/videos.entity';

@Injectable()
export class VideoCrudService extends TypeOrmCrudService<Video> {
  constructor(@InjectRepository(Video) repo: Repository<Video>) {
    super(repo);
  }
}
