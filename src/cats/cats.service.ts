import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return { success: true };
  }

  findAll(): Cat[] {
    return this.cats;
  }

  async test() {
    let ms = 10000;
    return new Promise((r) => setTimeout(r, ms));
  }
}
