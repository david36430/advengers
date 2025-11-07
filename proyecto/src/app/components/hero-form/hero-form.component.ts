import { Component, EventEmitter, Output } from '@angular/core';
import { heroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  @Output() created = new EventEmitter<Heroe>();

  model: Partial<Heroe> = {
    nombre: '',
    bio: '',
    img: 'assets/img/default.png',
    aparicion: new Date().toISOString().slice(0,10),
    casa: 'Marvel'
  };

  constructor(private heroesService: heroesService) {}

  onSubmit(form: any) {
    if (!this.model.nombre || !this.model.bio) return;
    const nuevo: Heroe = {
      nombre: this.model.nombre!.trim(),
      bio: this.model.bio!,
      img: this.model.img || 'assets/img/default.png',
      aparicion: this.model.aparicion || new Date().toISOString().slice(0,10),
      casa: this.model.casa || 'Marvel'
    };
    this.heroesService.addHero(nuevo);
    this.created.emit(nuevo);
    // reset
    form.resetForm({ img: 'assets/img/default.png', casa: 'Marvel', aparicion: new Date().toISOString().slice(0,10) });
  }
}
