import { Injectable } from '@angular/core';

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

@Injectable({
  providedIn: 'root'
})
export class heroesService {
  
  private STORAGE_KEY = 'avengers-heroes';

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];
    private FAVORITO_KEY = 'avengers-favorito';

    constructor() {
      console.log("servicio listo para utilizar");
      // Cargar heroes desde localStorage si existen
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as Heroe[];
          if (Array.isArray(parsed) && parsed.length) {
            this.heroes = parsed;
          }
        } catch (e) {
          console.warn('Error parsing heroes from storage', e);
        }
      }
    }

    /** Devuelve una copia del arreglo para evitar mutaciones externas */
    getHeroes():Heroe[]{
      return [...this.heroes];
    }

    /** Guardar la lista actual de héroes en localStorage */
    private saveToStorage(): void {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.heroes));
      } catch (e) {
        console.warn('No se pudo guardar heroes en localStorage', e);
      }
    }

    /** Añadir un nuevo héroe al arreglo y persistir */
    addHero(heroe: Heroe): void {
      this.heroes.push(heroe);
      this.saveToStorage();
    }

    /** Actualizar un héroe identificado por su nombre. Devuelve true si se actualizó */
    updateHero(nombre: string, updates: Partial<Heroe>): boolean {
      const idx = this.heroes.findIndex(h => h.nombre === nombre);
      if (idx === -1) return false;
      this.heroes[idx] = { ...this.heroes[idx], ...updates };
      this.saveToStorage();
      return true;
    }

    /** Eliminar un héroe por nombre. Devuelve true si se eliminó */
    deleteHero(nombre: string): boolean {
      const idx = this.heroes.findIndex(h => h.nombre === nombre);
      if (idx === -1) return false;
      this.heroes.splice(idx, 1);
      this.saveToStorage();
      return true;
    }

    /** Buscar héroe por nombre */
    findByName(nombre: string): Heroe | undefined {
      return this.heroes.find(h => h.nombre === nombre);
    }

    /** Persistir el nombre del favorito en localStorage */
    setFavorito(nombre: string | null): void {
      if (nombre) {
        localStorage.setItem(this.FAVORITO_KEY, nombre);
      } else {
        localStorage.removeItem(this.FAVORITO_KEY);
      }
    }

    /** Obtener el nombre almacenado como favorito */
    getFavoritoNombre(): string | null {
      return localStorage.getItem(this.FAVORITO_KEY);
    }

    /** Obtener el objeto Heroe marcado como favorito (si existe) */
    getFavorito(): Heroe | null {
      const nombre = this.getFavoritoNombre(); 
      if (!nombre) return null;
      return this.findByName(nombre) || null;
    }

    /** Eliminar favorito */
    clearFavorito(): void {
      localStorage.removeItem(this.FAVORITO_KEY);
    }

    /** Toggle favorito; devuelve true si quedó marcado, false si se desmarcó */
    toggleFavorito(nombre: string): boolean {
      const current = this.getFavoritoNombre();
      if (current === nombre) {
        this.clearFavorito();
        return false;
      }
      this.setFavorito(nombre);
      return true;
    }

    /** Comprueba si el nombre es el favorito actual */
    isFavorito(nombre: string): boolean {
      return this.getFavoritoNombre() === nombre;
    }

}