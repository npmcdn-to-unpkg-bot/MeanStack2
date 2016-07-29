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
var hero_service_1 = require('./hero.service');
var hero_1 = require('./hero');
var heroes_component_1 = require('./heroes.component');
var AddHeroComponent = (function () {
    function AddHeroComponent(hero, heroService) {
        this.hero = hero;
        this.heroService = heroService;
        this.title = "Patient List";
    }
    AddHeroComponent.prototype.ngOnInit = function () {
        this.hero.id = null;
        this.hero.name = null;
        this.hero.address = null;
        this.getHeroes();
    };
    AddHeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heros) { return _this.heroes = heros; });
    };
    AddHeroComponent.prototype.addHero = function () {
        var _this = this;
        this.heroService.addHero(this.hero).then(function (res) { return _this.updateData(); });
    };
    AddHeroComponent.prototype.updateData = function () {
        this.getHeroes();
        this.hero.id = null;
        this.hero.name = null;
        this.hero.address = null;
    };
    AddHeroComponent = __decorate([
        core_1.Component({
            selector: 'add-hero',
            templateUrl: '/app/add-hero.html',
            directives: [heroes_component_1.HeroesComponent]
        }), 
        __metadata('design:paramtypes', [hero_1.Hero, hero_service_1.HeroService])
    ], AddHeroComponent);
    return AddHeroComponent;
}());
exports.AddHeroComponent = AddHeroComponent;
//# sourceMappingURL=add-hero.component.js.map