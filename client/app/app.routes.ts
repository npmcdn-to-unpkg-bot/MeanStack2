import {provideRouter, RouterConfig} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {AddHeroComponent} from './add-hero.component';

const routes : RouterConfig = [
  {
    path : 'heroes',
    component : HeroesComponent
  },
  {
    path : 'addHero',
    component : AddHeroComponent
  },
  {
    path : '',
    redirectTo :'/heroes',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
