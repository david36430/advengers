import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  public eventos: Array<{ anio: string; titulo: string; descripcion: string }> = [
    { anio: '2008', titulo: 'Iron Man', descripcion: 'El nacimiento del universo cinematográfico de Marvel.' },
    { anio: '2012', titulo: 'The Avengers', descripcion: 'Los héroes se unen para enfrentar a Loki y los Chitauri.' },
    { anio: '2015', titulo: 'Age of Ultron', descripcion: 'Los Avengers deben detener a Ultron, una creación fuera de control.' },
    { anio: '2018', titulo: 'Infinity War', descripcion: 'Thanos busca las Gemas del Infinito para destruir la mitad del universo.' },
    { anio: '2019', titulo: 'Endgame', descripcion: 'Los Avengers viajan en el tiempo para revertir el chasquido de Thanos.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // future initialization if needed
  }
}