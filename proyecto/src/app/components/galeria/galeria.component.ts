import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  
  heroes: Heroe[] = [];
  selectedHero: Heroe | null = null;

  constructor(private _heroesService: heroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  selectHero(heroe: Heroe) {
    this.selectedHero = heroe;
  }

  clearSelection() {
    this.selectedHero = null;
  }

}
