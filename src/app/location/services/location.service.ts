import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationRepository } from '../repositories/location.repository';
import { Location } from '../model/entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: LocationRepository,
  ) {}

  async getLocations(): Promise<Location[]> {
    return this.locationRepository.getLocations();
  }

  async getLocation(id_location: number): Promise<Location> {
    const res = await this.locationRepository.getLocation(id_location);
    return res;
  }
}
