import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BiografiaComponent } from "./components/biografia/biografia.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { CarruselComicsComponent } from './components/carrusel-comics/carrusel-comics.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';


const APP_ROUTES: Routes=[
 
    {path: 'home', component: HomeComponent},
    {path: 'biografia', component: BiografiaComponent},
    {path: 'heroes', component: HeroesComponent},
     { path: 'carrusel', component: CarruselComicsComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'favorito', component: FavoritoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent },
  { path: '', redirectTo: '/carrusel', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);