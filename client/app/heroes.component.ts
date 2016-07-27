import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/heros-list.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    title = 'Hero Display!';
    heros: Hero[];
    selectedHero: Hero;

    constructor(private router : Router,
                private heroService: HeroService) { }

    ngOnInit() {
        this.getHeros();
    }
    getHeros() {
      this.heroService.getHeroes().then(heros => this.heros = heros);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
