import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './controllers/country.controller';
import { CountryService } from './services/country.service';
import { CountryRepository } from './Repositories/country.repository';



@Module({
  imports: [
    TypeOrmModule.forFeature([CountryRepository]),
  ],
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule { }
