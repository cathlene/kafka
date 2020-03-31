import { Injectable } from '@nestjs/common';
import { Country } from '../model/entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from '../Repositories/country.repository';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryRepository)
    private countryRepository: CountryRepository,
  ) {}

  async getCountries(): Promise<Country[]> {
    return this.countryRepository.getCountries();
  }

  async getCountryData(id_country: number): Promise<Country> {
    return this.countryRepository.getCountryData(id_country);
  }
}
