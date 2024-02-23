import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ValidateOwnerDto } from './dto/validate-owner.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async validateOwner(@Body() body: ValidateOwnerDto) {
    return await this.appService.validateOwner(body);
  }
}
