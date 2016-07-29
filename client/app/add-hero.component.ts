import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroesComponent} from './heroes.component';

@Component({
  selector : 'add-hero',
  templateUrl : '/app/add-hero.html',
  directives : [HeroesComponent]
})

export class AddHeroComponent implements OnInit{

  constructor(private hero : Hero, private heroService : HeroService){}

  heroes : Hero[];
  title = "Patient List";

  ngOnInit(){
    this.hero.id = null;
    this.hero.name = null;
    this.hero.address = null;
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heros => this.heroes = heros);
  }

  addHero(){
    this.heroService.addHero(this.hero);
    this.getHeroes();
    this.hero.id = null;
    this.hero.name = null;
    this.hero.address = null;
  }
}
