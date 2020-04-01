import { EntityRepository, Repository } from 'typeorm';
import { Country } from '../model/entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
  async getCountries(): Promise<Country[]> {
    return this.find();
  }

  async getCountryData(countryID: number): Promise<Country> {
    return await this.findOne(countryID);
  }
}
