import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-carrusel-comics',
  templateUrl: './carrusel-comics.component.html',
  styleUrls: ['./carrusel-comics.component.css']
})
export class CarruselComicsComponent implements OnInit {
  
  heroes: Heroe[] = [];

  constructor(private _heroesService: heroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
}
