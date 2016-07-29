"use strict";
var router_1 = require('@angular/router');
var add_hero_component_1 = require('./add-hero.component');
var search_heroes_component_1 = require('./search-heroes.component');
var routes = [
    {
        path: 'addPatient',
        component: add_hero_component_1.AddHeroComponent
    },
    {
        path: 'searchPatients',
        component: search_heroes_component_1.HeroesSearchComponent
    },
    {
        path: '',
        redirectTo: '/searchPatients',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map