import {Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './Hero';

@Component({
  templateUrl : '/app/hero-details.html',
  providers : [Hero]
})

export class HeroDetailComponent implements OnInit, OnDestroy {

  private sub : any;

  constructor (
    private route : ActivatedRoute,
    private router : Router,
    private service : HeroService,
    private hero : Hero
  ){}
  ngOnInit(){
    this.sub = this.route.params.subscribe(params =>{
      let id = params['id'];
      this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  goBack(){
     window.history.back();
  }
}
