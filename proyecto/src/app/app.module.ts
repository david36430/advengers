import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { CasaEditorialComponent } from './components/casa-editorial/casa-editorial.component';

//aqui rutas
import { APP_ROUTING } from './app.routes';
//aqui servicios
import { heroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    HeroesComponent,
    BiografiaComponent,
    HomeComponent,
    SobreMiComponent,
    CasaEditorialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [heroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
