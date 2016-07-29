import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './Hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: '/app/heros-list.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    @Input()
    title : string;
    @Input()
    heros: Hero[];

    constructor(private router : Router,
                private heroService: HeroService) { }

    ngOnInit() {
    }

    onSelect(hero: Hero) {
        this.router.navigate(['/patient', hero.id]);
    }
}
