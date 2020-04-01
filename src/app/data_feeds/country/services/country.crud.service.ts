import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Country } from '../model/entities/country.entity';

@Injectable()
export class CountryCrudService extends TypeOrmCrudService<Country> {
  constructor(@InjectRepository(Country) repo: Repository<Country>) {
    super(repo);
  }
}
