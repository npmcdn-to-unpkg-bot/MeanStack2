import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:8080/api/heroes';  // URL to web api
  constructor(private http: Http) { }
  getHeroes() {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res : Response){
    console.log(res);
    let body = res.json();
    return body as Hero[];
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
