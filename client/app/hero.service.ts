import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'http://localhost:8080/api/heroes';
    constructor(private http: Http) { }
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getHero(id : string){
      return this.http.get(this.heroesUrl + '/detail/' + id)
          .toPromise()
          .then(this.getHeroData)
          .catch(this.handleError);

    }

    searchHeroes(term) {
        return this.http.get(this.heroesUrl + '/' + term)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    addHero(hero: Hero) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private getHeroData(res : Response){
      let body = res.json();
      return body as Hero;
    }

    private extractData(res: Response) {
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
