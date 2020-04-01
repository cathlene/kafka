import { Controller, BadRequestException, Get, Param } from '@nestjs/common';
import { EndUserService } from '../services/endUser.service';
import { EndUser } from '../model/entities/endUser.entity';

@Controller('endUser')
export class EndUserController {
  constructor(private readonly userService: EndUserService) {}

  @Get()
  async getAllUsers(): Promise<EndUser[]> {
    try {
      return await this.userService.getUsers();
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }

  @Get(':enduser')
  async getCountryData(@Param('enduser') id_enduser): Promise<EndUser> {
    try {
      return await this.userService.getUser(id_enduser);
    } catch (error) {
      throw new BadRequestException(error.message, error);
    }
  }
}
