import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroService} from './services/hero.service';
import {LoggerService} from './services/logger.service';
import {APP_CONFIG} from './configs/tokens';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: HeroService, useClass:HeroService},
    {provide: LoggerService, useValue: 'one simple logger service value'},
    {provide: 'httpApi', useValue: 'http://localhost:8000'},
    {provide: APP_CONFIG, useValue: 'token value'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
