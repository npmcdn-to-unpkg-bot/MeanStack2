import {Component, Input} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector : 'add-hero',
  templateUrl : '/app/add-hero.html'
})

export class AddHeroComponent{

  constructor(private hero : Hero, private heroService : HeroService){}

  addHero(){
    this.heroService.addHero(this.hero);
    this.hero.id = null;
    this.hero.name = null;
  }
}
