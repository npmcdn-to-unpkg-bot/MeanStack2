import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector : 'add-hero',
  templateUrl : '/app/add-hero.html'
})

export class AddHeroComponent implements OnInit{

  constructor(private hero : Hero, private heroService : HeroService){}

  ngOnInit(){
    this.hero.id = null;
    this.hero.name = null;
  }

  addHero(){
    this.heroService.addHero(this.hero);
    this.hero.id = null;
    this.hero.name = null;
  }
}
