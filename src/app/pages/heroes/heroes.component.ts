import { Component, OnInit } from '@angular/core';
import {Hero, HeroArg} from '../../configs/types';
import Heroes from '../../configs/heroes';
import heroes from '../../configs/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };

  heroes: Hero[] = Heroes;

  constructor() {
    console.log(heroes);
  }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchParams);
  }

}
