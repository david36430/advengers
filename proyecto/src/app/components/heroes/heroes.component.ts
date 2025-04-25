import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor(private _heroesService:heroesService) { }
  ngOnInit(): void {
    this.heroes= this. _heroesService.getHeroes();
    console.log(this.heroes);
  }

}
