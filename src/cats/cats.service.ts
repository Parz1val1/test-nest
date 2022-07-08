import { Cat } from './../interfaces/cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): Cat {
    cat.id = this.cats.length;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  find(id: number): Cat {
    return this.cats.find((cat) => cat.id == id);
  }
}
