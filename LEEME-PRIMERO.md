# ITMA Academy Mobile — primera preparación

Esta carpeta es una copia independiente de la web original. No reemplaza ni modifica el repositorio publicado.

## Incluye
- `www/`: sitio web preparado para PWA y para ser empaquetado con Capacitor.
- `manifest.webmanifest` y `service-worker.js`: instalación PWA y caché limitada de la estructura visual.
- `mobile.css` y `mobile-mode.js`: ocultan el acceso y los paneles de profesor en la interfaz móvil.
- `capacitor.config.json`: configuración inicial de Capacitor para Android.
- `package.json`: comandos básicos.

## Importante
- La URL actual de Google Apps Script se conservó en `www/app.js`.
- Los datos de Drive y las respuestas de Apps Script no se guardan en caché.
- La interfaz móvil oculta el acceso de profesor; esto no sustituye controles de autorización del servidor. La API debe seguir protegiendo las acciones administrativas.
- No se cambió el proyecto original ni el archivo `Código.gs`.
- TikTok Brasil y la contraseña principal quedan pendientes, según lo acordado.

## Preparar Android en Windows
1. Instala Node.js LTS y Android Studio.
2. Abre PowerShell dentro de esta carpeta.
3. Ejecuta:
   `npm install @capacitor/core @capacitor/cli @capacitor/android`
4. Ejecuta:
   `npx cap add android`
5. Ejecuta:
   `npx cap sync android`
6. Ejecuta:
   `npx cap open android`
7. En Android Studio prueba primero en un emulador o teléfono conectado y luego genera el APK desde Build > Build Bundle(s) / APK(s) > Build APK(s).

## Probar PWA en iPhone
Publica el contenido de `www/` en un sitio servido por HTTPS. En iPhone abre la dirección con Safari, pulsa Compartir y luego “Añadir a pantalla de inicio”.

## Pruebas obligatorias antes de distribuir
- Inicio de sesión de alumno.
- Listado y reproducción de clases.
- Apertura de PDF y enlaces de Drive.
- Preguntas y progreso.
- Verificar comportamiento de Apps Script dentro de WebView y Safari.
- Confirmar que ningún acceso de profesor aparece en la app.

Esta es una base inicial; todavía no es un APK compilado ni una publicación PWA.


## Generar un APK desde la nube (sin instalar Android Studio en el computador corporativo)

Este ZIP incluye un flujo de GitHub Actions. Para ejecutarlo:
1. En GitHub crea un repositorio nuevo llamado `ITMA-Academy-Mobile` (recomendado: privado).
2. Sube el contenido de este ZIP al repositorio nuevo, conservando la carpeta `.github/workflows`.
3. Abre la pestaña **Actions** del repositorio y habilita los workflows si GitHub lo solicita.
4. Entra en **Build ITMA Academy Android APK** y pulsa **Run workflow**.
5. Cuando termine en verde, abre la ejecución y descarga el artefacto `ITMA-Academy-debug-APK`.

El artefacto es un APK de depuración para pruebas, no una versión final firmada para publicación. La primera compilación puede revelar incompatibilidades que tendremos que corregir. No compartas el APK públicamente hasta probar inicio de sesión, clases, PDF, preguntas y progreso en un teléfono real.
