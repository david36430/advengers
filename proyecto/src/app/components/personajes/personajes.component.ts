import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { heroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {
  // Emitirá { personaje, favorito } cuando se cambie el estado
  @Output() favoritoSeleccionado = new EventEmitter<any>();

  heroes: Heroe[] = [];

  constructor(private _heroesService: heroesService, private router: Router) {}

  ngOnInit(): void {
    // Obtener la lista de héroes desde el servicio
    this.heroes = this._heroesService.getHeroes();
  }

  isFavorito(personaje: Heroe): boolean {
    return this._heroesService.isFavorito(personaje.nombre);
  }

  seleccionarFavorito(personaje: Heroe) {
    // Toggle favorito via service (persistente)
    const nowFav = this._heroesService.toggleFavorito(personaje.nombre);

    // Emitir el estado actualizado
    this.favoritoSeleccionado.emit({ personaje, favorito: nowFav });

    // Si quedó marcado como favorito, navegar a la página de favorito con query param
    if (nowFav) {
      this.router.navigate(['/favorito'], { queryParams: { nombre: personaje.nombre } });
    }
  }
}