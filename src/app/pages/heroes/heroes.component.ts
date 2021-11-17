import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import {Hero, HeroArg} from '../../configs/types';
import {HeroService} from '../../services/hero.service';
import {APP_CONFIG} from '../../configs/tokens';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /*providers: [HeroService]*/
})
export class HeroesComponent implements OnInit {

  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private logger: LoggerService,
    @Inject('httpApi') private uri: string,
    @Inject(APP_CONFIG) private tokenValue: string,
  ) {
  }

  ngOnInit(): void {
    console.log(this.heroService.getHeroes());
    this.heroes = this.heroService.getHeroes();
    console.log(this.logger);
    console.log(this.uri);
    console.log(this.tokenValue);

  }

  onSearch() {
    console.log(this.searchParams);
  }

}
