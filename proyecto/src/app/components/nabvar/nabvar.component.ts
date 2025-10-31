import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Botón de diagnóstico: navega programáticamente a la ruta indicada
  navigateTo(route: string): void {
    this.router.navigate([route]).then(ok => {
      // opcional: podríamos mostrar resultado en consola
      console.log('navigateTo', route, ok);
    }).catch(err => console.error('navigate error', err));
  }

}
