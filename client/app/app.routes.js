"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var add_hero_component_1 = require('./add-hero.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'addHero',
        component: add_hero_component_1.AddHeroComponent
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map