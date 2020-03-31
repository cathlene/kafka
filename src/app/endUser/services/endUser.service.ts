import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EndUserRepository } from '../repositories/endUser.repositories';
import { EndUser } from '../model/entities/endUser.entity';

@Injectable()
export class EndUserService {
  constructor(
    @InjectRepository(EndUserRepository)
    private userRepository: EndUserRepository,
  ) { }

  async getUsers(): Promise<EndUser[]> {
    return this.userRepository.getUsers();
  }

  async getUser(id_user: number): Promise<EndUser> {
    return await this.userRepository.getUser(id_user);
  }
}
