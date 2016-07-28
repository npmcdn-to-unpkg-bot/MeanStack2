import {provideRouter, RouterConfig} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {AddHeroComponent} from './add-hero.component';
import {HeroesSearchComponent} from './search-heroes.component';

const routes : RouterConfig = [
  {
    path : 'patients',
    component : HeroesComponent
  },
  {
    path : 'addPatient',
    component : AddHeroComponent
  },
  {
    path : 'searchPatients',
    component : HeroesSearchComponent
  },
  {
    path : '',
    redirectTo :'/patients',
    pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
