import {Component} from '@angular/core';
import {Control} from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: '/app/heroes-search.html'
})

export class HeroesSearchComponent {
    items: Observable<Array<Hero>>;
    term = new Control();
    constructor(private heroService : HeroService){
      this.items = this.term.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .switchMap(term => this.searchHero(term));
    }

    searchHero(term){
      return  term !== "" ? this.heroService.testHeroes(term) : Observable.of([]);
    }
}
