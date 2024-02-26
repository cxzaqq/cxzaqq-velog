import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ValidateOwnerDto } from './dto/validate-owner.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return;
  }

  @Post()
  async validateOwner(@Body() body: ValidateOwnerDto) {
    return await this.appService.validateOwner(body);
  }
}
