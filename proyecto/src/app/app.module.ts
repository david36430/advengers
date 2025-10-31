import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importar todos los componentes
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { CarruselComicsComponent } from './components/carrusel-comics/carrusel-comics.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    HomeComponent,
    HeroesComponent,
    BiografiaComponent,
    CarruselComicsComponent,
    PersonajesComponent,
    FavoritoComponent,
    HistoriaComponent,
    GaleriaComponent,
    HojaDeVidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
