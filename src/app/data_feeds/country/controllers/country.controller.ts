import { Controller, Get, Body, BadRequestException, Query, ValidationPipe, Param, Post } from '@nestjs/common';
import { Country } from '../model/entities/country.entity';
import { CountryService } from '../services/country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAllCountries(): Promise<Array<Country>> {
    try {
      return await this.countryService.getCountries();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }

  @Get(':country')
  async getCountryData(@Param('country') id_country): Promise<Country> {
    try {
      return await this.countryService.getCountryData(id_country);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
