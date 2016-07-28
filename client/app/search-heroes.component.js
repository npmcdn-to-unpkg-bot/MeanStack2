"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var hero_service_1 = require('./hero.service');
var HeroesSearchComponent = (function () {
    function HeroesSearchComponent(heroService) {
        var _this = this;
        this.heroService = heroService;
        this.term = new common_1.Control();
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchHero(term); });
    }
    HeroesSearchComponent.prototype.searchHero = function (term) {
        return term !== "" ? this.heroService.testHeroes(term) : Observable_1.Observable.of([]);
    };
    HeroesSearchComponent = __decorate([
        core_1.Component({
            selector: 'hero-search',
            templateUrl: '/app/heroes-search.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesSearchComponent);
    return HeroesSearchComponent;
}());
exports.HeroesSearchComponent = HeroesSearchComponent;
//# sourceMappingURL=search-heroes.component.js.map