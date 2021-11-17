import { Injectable } from '@angular/core';
import Heroes from '../configs/heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() {
    return Heroes;
  }
}
