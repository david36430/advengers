import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {
  @Input() personajeFavorito: Heroe | null = null;

  constructor(private route: ActivatedRoute, private _heroesService: heroesService) {}

  ngOnInit(): void {
    // Leer query param 'nombre' y buscar el héroe en el servicio
    this.route.queryParamMap.subscribe((params) => {
      const nombre = params.get('nombre');
      if (nombre) {
        const found = this._heroesService.findByName(nombre);
        if (found) {
          // Guardar como favorito persistente
          this._heroesService.setFavorito(found.nombre);
          this.personajeFavorito = found;
          return;
        }
      }
      // Si no viene por query param o no se encontró, usar el favorito persistente
      const persisted = this._heroesService.getFavorito();
      if (persisted) {
        this.personajeFavorito = persisted;
      }
    });
  }
}