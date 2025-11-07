import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  selectedHero: Heroe | null = null;
  showForm = false;
  constructor(private _heroesService:heroesService) { }
  ngOnInit(): void {
    this.heroes= this. _heroesService.getHeroes();
    console.log(this.heroes);
  }

  showDetail(heroe: Heroe) {
    this.selectedHero = heroe;
  }

  closeDetail() {
    this.selectedHero = null;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onHeroCreated(heroe: Heroe) {
    // refrescar la lista desde el servicio
    this.heroes = this._heroesService.getHeroes();
    this.showForm = false;
  }

}
