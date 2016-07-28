"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var add_hero_component_1 = require('./add-hero.component');
var search_heroes_component_1 = require('./search-heroes.component');
var routes = [
    {
        path: 'patients',
        component: heroes_component_1.HeroesComponent
    },
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
        redirectTo: '/patients',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map