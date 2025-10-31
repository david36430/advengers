# avengers-spa

Aplicación SPA en Angular: "Avengers Universe"

## Objetivo

Desarrollar una aplicación web de una sola página (SPA) utilizando Angular, aplicando conceptos de componentes, enrutamiento, servicios y comunicación entre componentes.

## Cómo ejecutar

1. Abrir terminal en la carpeta del proyecto:

	`c:\Users\Gemelos321\Documents\ejercicio angular\advengers\proyecto`

2. Instalar dependencias:

```powershell
npm install
```

3. Iniciar servidor de desarrollo:

```powershell
# Si tu Node da error por OpenSSL (v17+), usar la opción legacy:
set NODE_OPTIONS=--openssl-legacy-provider; npm start

# O en cmd:
set "NODE_OPTIONS=--openssl-legacy-provider" && npm start
```

4. Abrir en el navegador: http://localhost:4200

## Estructura y componentes

La app incluye los siguientes componentes (ubicación bajo `src/app/components`):

- `CarruselComicsComponent`: `carrusel-comics` - muestra un carrusel con imágenes (Bootstrap carousel).
- `PersonajesComponent`: `personajes` - lista de personajes en tarjetas con botón de "marcar favorito".
- `FavoritoComponent`: `favorito` - muestra el personaje favorito (persistido en localStorage).
- `HistoriaComponent`: `historia` - línea temporal con eventos (texto).
- `GaleriaComponent`: `galeria` - galería de imágenes con efectos hover.
- `HojaDeVidaComponent`: `hoja-de-vida` - CV/hoja de vida simulada.

## Favorito (persistencia)

El favorito se guarda en `localStorage` con la clave `avengers-favorito`. El servicio `heroes.service.ts` expone métodos:

- `getFavorito()` - devuelve el objeto `Heroe` marcado como favorito (o `null`).
- `setFavorito(nombre)` - guarda el favorito.
- `toggleFavorito(nombre)` - alterna el favorito y devuelve `true` si quedó marcado.

## Flujo para la demo

1. Ir a "Comics" (carrusel) y ver las imágenes con captions debajo.
2. Ir a "Personajes" y marcar un personaje como favorito.
3. La app navegará a `/favorito?nombre=...` y mostrará la ficha del favorito.
4. Ir a "Historia" para ver la línea temporal (texto).

## Notas técnicas y recomendaciones

- Si quieres que el favorito use rutas semánticas (`/favorito/:nombre`) puedo adaptarlo fácilmente.
- Se reportaron vulnerabilidades en dependencias tras `npm install`. Para intentar solucionarlas: `npm audit fix` y revisar cambios.

## Contacto

Repositorio local: `advengers/proyecto`

---

Generado automáticamente para la entrega del taller "Diseño de una SPA en Angular — Avengers Universe".
