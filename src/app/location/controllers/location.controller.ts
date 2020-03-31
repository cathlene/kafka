import { Controller, Get, BadRequestException, Param } from '@nestjs/common';
import { LocationService } from '../services/location.service';
import { Location } from '../model/entities/location.entity';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  @Get()
  async getAllLocations(): Promise<Location[]> {
    try {
      return await this.locationService.getLocations();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }

  @Get(':id_location')
  async getDevice(@Param('id_location') id_location): Promise<Location> {
    try {
      return await this.locationService.getLocation(id_location);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
