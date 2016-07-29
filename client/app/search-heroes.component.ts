import {Component} from '@angular/core';
import {Control} from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: '/app/heroes-search.html',
    directives : [HeroesComponent]
})

export class HeroesSearchComponent {
    items: Hero[];
    term = new Control();
    title = '';
    constructor(private heroService : HeroService){
      this.term.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .switchMap(term => this.searchHero(term))
          .subscribe(data => this.setValues(data));
    }

    searchHero(term){
      if(term !== "") {
          this.title = 'Search results: ';
          return this.heroService.searchHeroes(term);
      }
      this.title = '';
      return Promise.resolve([]);
    }

    setValues(data){
      this.items = data;
    }
}
