import { EntityRepository, Repository } from 'typeorm';
import { Location } from '../model/entities/location.entity';

@EntityRepository(Location)
export class LocationRepository extends Repository<Location> {
  async getLocations(): Promise<Location[]> {
    return await this.find();
  }

  async getLocation(idLocation: number): Promise<Location> {
    return await this.findOne(idLocation);
  }
}
