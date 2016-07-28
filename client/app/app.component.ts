import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector : 'my-app',
  templateUrl : '/app/home-routers.html',
  styleUrls: ['app/app.component.css'],
  directives : [ROUTER_DIRECTIVES],
  providers : [HeroService, Hero]
})

export class AppComponent{
  title = 'Patient Data';
}
