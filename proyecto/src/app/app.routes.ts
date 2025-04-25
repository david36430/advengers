import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BiografiaComponent } from "./components/biografia/biografia.component";
import { HeroesComponent } from "./components/heroes/heroes.component";


const APP_ROUTES: Routes=[
 
    {path: 'home', component: HomeComponent},
    {path: 'biografia', component: BiografiaComponent},
    {path: 'heroes', component: HeroesComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);