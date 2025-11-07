# Servicios en Angular — Guía y práctica

PhD Cristian Camilo Ordoñez

Temas
1. Qué son los servicios en Angular
2. Desarrollo de servicios (app Avengers)
3. Llamado de servicios en Angular
4. Práctica

---

## 1. ¿Qué son los servicios en Angular?

- Servicios: clases que encapsulan lógica reutilizable y/o acceso a datos.
- Propósitos comunes:
  1. Brindar información a quien la necesite (componentes, otros servicios).
  2. Realizar peticiones CRUD (create, read, update, delete) hacia APIs o almacenamiento local.
  3. Mantener datos de forma persistente (por ejemplo, usando `localStorage` o llamadas a backend).
  4. Ser recursos reutilizables: varios componentes pueden solicitar la misma información.

Referencia: https://angular.io/ (documentación oficial)

Diagrama simple:

Componente-1   \n  ↘
   Servicio  ↔  Información  ↔  Fuente (API / localStorage / archivo)
  ↗
Componente-2

---

## 2. Desarrollo de servicios — App Avengers (pasos)

1. Crear la carpeta `src/app/services` si no existe.
2. Crear el servicio (Angular CLI):

```bash
# PowerShell (en la raíz del proyecto Angular)
ng generate service app/services/heroes
# ó atajos: ng g s app/services/heroes
```

3. `@Injectable()` es el decorador que marca la clase como inyectable. Recomendado usar `providedIn: 'root'` para que Angular lo gestione como singleton compartido en toda la app.

4. Importar el servicio en componentes donde se necesita y usarlo mediante inyección en el constructor.

### Ejemplo real (tomado del proyecto `heroes.service.ts`)

```typescript
import { Injectable } from '@angular/core';

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

@Injectable({ providedIn: 'root' })
export class heroesService {
  private heroes: Heroe[] = [ /* arreglo de héroes (ver archivo real) */ ];
  private FAVORITO_KEY = 'avengers-favorito';

  constructor() {
    console.log('servicio listo para utilizar');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  findByName(nombre: string): Heroe | undefined {
    return this.heroes.find(h => h.nombre === nombre);
  }

  // Persistencia simple: localStorage
  setFavorito(nombre: string | null): void {
    if (nombre) localStorage.setItem(this.FAVORITO_KEY, nombre);
    else localStorage.removeItem(this.FAVORITO_KEY);
  }

  getFavoritoNombre(): string | null {
    return localStorage.getItem(this.FAVORITO_KEY);
  }

  getFavorito(): Heroe | null {
    const nombre = this.getFavoritoNombre();
    if (!nombre) return null;
    return this.findByName(nombre) || null;
  }

  toggleFavorito(nombre: string): boolean {
    const current = this.getFavoritoNombre();
    if (current === nombre) {
      this.setFavorito(null);
      return false;
    }
    this.setFavorito(nombre);
    return true;
  }

  isFavorito(nombre: string): boolean {
    return this.getFavoritoNombre() === nombre;
  }
}
```

Notas:
- El servicio en este proyecto ya incluye métodos útiles: obtener todos los héroes, buscar por nombre y persistir un "favorito" en `localStorage`.
- `providedIn: 'root'` evita que tengas que añadir el servicio en `providers` del `AppModule`.

---

## 3. Llamado de servicios en Angular (ejemplo: `HeroesComponent`)

1. Importar el servicio y la interfaz en el componente.
2. Inyectarlo en el constructor (generalmente `private` o `protected`).
3. En `ngOnInit()` usar el método `getHeroes()` y guardar el resultado en una propiedad del componente.

Ejemplo:

```typescript
import { Component, OnInit } from '@angular/core';
import { heroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: heroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
}
```

Plantilla (`heroes.component.html`) usando *ngFor:

```html
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4" *ngFor="let heroe of heroes">
    <div class="card h-100">
      <img class="card-img-top img-fluid" [src]="heroe.img" [alt]="heroe.nombre">
      <div class="card-body">
        <h5 class="card-title">{{heroe.nombre}}</h5>
        <p class="card-text">{{heroe.bio}}</p>
        <p class="card-text"><small class="text-muted">{{heroe.aparicion}}</small></p>
      </div>
      <button type="button" class="btn btn-outline-primary btn-block">ver más</button>
    </div>
  </div>
</div>
```

Interacción con el servicio (ej.: marcar favorito desde el componente):

```typescript
marcarFavorito(heroe: Heroe) {
  const marcado = this.heroesService.toggleFavorito(heroe.nombre);
  // mostrar notificación pequeña o cambiar clase del botón según `marcado`
}

esFavorito(heroe: Heroe) {
  return this.heroesService.isFavorito(heroe.nombre);
}
```

---

## 4. Práctica (ejercicios sugeridos para la clase)

1. Extender el servicio con métodos CRUD:
   - `addHero(heroe: Heroe)`
   - `updateHero(nombre: string, updates: Partial<Heroe>)`
   - `deleteHero(nombre: string)`
   - Asegurar que las operaciones actualicen la lista interna y (opcional) persistan en `localStorage`.

2. Crear un formulario para agregar un nuevo héroe y validar campos.

3. Implementar un pequeño buscador (input) que filtre la lista usando `findByName` o un filtro en memoria.

4. Cambiar la ruta de favorito para usar parámetros de ruta (`/favorito/:nombre`) en lugar de query params, y actualizar la navegación desde `personajes`.

5. Añadir pruebas unitarias básicas para el servicio (`heroes.service.spec.ts`):
   - Probar `getHeroes()` devuelve la lista esperada.
   - Probar `toggleFavorito()` y que persista en `localStorage`.

6. (Opcional) Reemplazar persistencia por una API simulada usando `HttpClient` y `InMemoryWebApi` para practicar llamadas HTTP.

---

## Comandos útiles (PowerShell)

- Generar servicio:

```powershell
ng generate service src/app/services/heroes
# o
ng g s src/app/services/heroes
```

- Servir la app (si ves el error de OpenSSL en Node moderno):

```powershell
# si tu Node da error ERR_OSSL_EVP_UNSUPPORTED
$env:NODE_OPTIONS='--openssl-legacy-provider'; ng serve --open
# O abrir nueva PowerShell y ejecutar:
# $env:NODE_OPTIONS='--openssl-legacy-provider'; ng serve --open
```

- Ejecutar tests (si existen):

```powershell
npm test
```

- Crear un commit con los cambios (si editas archivos):

```powershell
git add -A
git commit -m "docs: añadir SERVICIOS.md con guía y ejercicios"
```

---

## Sugerencia para la presentación en clase

- Mostrar en vivo el servicio `heroes.service.ts` y explicar cada método.
- Ejecutar la app, navegar a la sección Personajes y marcar/desmarcar favorito; abrir DevTools -> Application -> Local Storage para demostrar persistencia.
- Hacer un ejercicio en vivo: agregar un héroe (si creaste el formulario) o probar el buscador.
- Dejar la PDF/MD con ejercicios para que los estudiantes los completen.

---

Si quieres, puedo:
- aplicar directamente las mejoras CRUD en `heroes.service.ts` y crear el formulario de práctica (cambio de código),
- o generar tests unitarios para el servicio.

Dime qué prefieres que haga a continuación y lo implemento.
