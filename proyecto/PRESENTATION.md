# PRESENTATION - Avengers Universe (Taller)

Objetivo: preparar una demo corta (5-7 min) para la próxima clase mostrando los puntos solicitados por el taller.

Slides / flujo sugerido

1. Introducción (15s)
   - Nombre del proyecto: `avengers-spa`
   - Tecnologías: Angular 12, Bootstrap

2. Estructura de la app (30s)
   - Mencionar los 6 componentes y su propósito.

3. Demo en vivo (3-4 min)
   - Home / Carrusel: mostrar imágenes y captions.
   - Personajes: mostrar tarjetas, hacer click en "Marcar favorito" en un personaje.
   - Favorito: mostrar que la app redirige a `/favorito` y muestra la ficha persistida.
   - Historia: mostrar la línea temporal (texto únicamente).

4. Notas técnicas (30s)
   - Favorito guardado en `localStorage` (clave `avengers-favorito`).
   - Script de inicio: `npm start` (con `NODE_OPTIONS=--openssl-legacy-provider` si tu Node da error OpenSSL).

5. Conclusión / Preguntas (30s)

Archivos clave a mostrar en el IDE

- `src/app/services/heroes.service.ts` (servicio con persistencia)
- `src/app/components/personajes/personajes.component.ts` (toggle + navegación)
- `src/app/components/favorito/favorito.component.ts` (lee query param y usa servicio)

Comandos rápidos

```powershell
npm install
set NODE_OPTIONS=--openssl-legacy-provider; npm start
```

Capturas recomendadas

- Home con carrusel
- Personajes mostrando varias tarjetas
- Página Favorito después de marcar uno
- Página Historia

Notas para el presentador

- Si el favorito no aparece, recarga la página en `/favorito` (el favorito se guarda en localStorage).
- Si hay errores al iniciar, revisa la terminal y copia el mensaje. Puedes ejecutar `npm audit fix` para intentar resolver vulnerabilidades.

