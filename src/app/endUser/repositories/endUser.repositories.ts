import { EntityRepository, Repository } from 'typeorm';
import { EndUser } from '../model/entities/endUser.entity';

@EntityRepository(EndUser)
export class EndUserRepository extends Repository<EndUser> {
  async getUsers(): Promise<EndUser[]> {
    return await this.find();
  }

  async getUser(idUser: number): Promise<EndUser> {
    return await this.findOne({ where: { idUser } });
  }
}
