# Proyecto Web: Cronómetro y Temporizador de Cuenta Regresiva

## Prompt Base

## Estructura del Proyecto

El proyecto constará de los siguientes archivos:

- `index.html`
- `script.js`
- `style.css`

## Especificaciones de la Interfaz Web

### Pantalla Principal
- Basado en la imagen `pantallaprincipal`.
- Debe incluir dos botones:
  - Botón para navegar a la pantalla del cronómetro.
  - Botón para navegar a la pantalla del temporizador de cuenta regresiva.

### Pantalla del Cronómetro
- Basado en la imagen `cronometro`.
- Especificaciones:
  - Botón para regresar a la pantalla principal.
  - Visualización del tiempo:
    - Números en tamaño `100px`.
    - Milisegundos en tamaño `30px`.
    - Formato de tiempo: `00:00:00`, con milisegundos en `000`.
  - Funcionalidad:
    - El cronómetro debe iniciar, pausar, reiniciar, y limpiar.
    - Al presionar el botón "clean" cuando el cronómetro no esté en curso, se debe mostrar un mensaje indicando que el cronómetro no está en curso.

### Pantalla del Temporizador
- Basado en la imagen `temporizador`.
- Especificaciones:
  - Botón para regresar a la pantalla principal.
  - Visualización del tiempo:
    - Números en tamaño `100px`.
  - Tablero de Números:
    - Solo debe incluir los números del `0` al `9`.
    - Sin los controles de "set" ni "clean" en el tablero de números.
    - Bordes de un grosor de `3px`.
  - Funcionalidad:
    - Al finalizar el tiempo, debe generarse un sonido.
    - Al presionar el botón "clean" cuando el temporizador no esté en curso, se debe mostrar un mensaje indicando que se debe insertar un tiempo a transcurrir.

### Botones
- Distinguir los botones por color según su función.
- Incluir un icono acorde a la acción de cada botón (inicio, pausa, reinicio, regresar, etc.).

## Pruebas de Performance

- Una vez completado el desarrollo, se deben realizar pruebas de performance para asegurar que la aplicación web funcione de manera óptima en diferentes dispositivos y resoluciones de pantalla.

## Mejores Prácticas de Desarrollo

- Implementar código limpio y modular.
- Seguir los principios de accesibilidad web.
- Asegurar compatibilidad con los navegadores más utilizados.
- Utilizar control de versiones en Git para documentar el progreso del proyecto.

## -------------------------------

## Prompt optimizado

# Proyecto Web: Cronómetro y Temporizador de Cuenta Regresiva

## Objetivo del Proyecto

Eres un Frontend Developer Web, y tu tarea es crear un proyecto web que incluya un cronómetro y un temporizador de cuenta regresiva. El diseño y la funcionalidad deben basarse en las imágenes que se proporcionarán, siguiendo las siguientes especificaciones:

## Estructura del Proyecto

- **Archivos principales:**
  - `index.html`
  - `script.js`
  - `style.css`

- **Mejores prácticas:**
  - Sigue un enfoque de desarrollo limpio y modular.
  - Prioriza el rendimiento y la eficiencia del código.
  - Implementa código que sea fácil de mantener y escalar.

## Interfaz de Usuario

### Pantalla Principal

- **Descripción:** Desarrolla la pantalla principal basada en la imagen proporcionada (`pantallaprincipal`).
- **Funcionalidad:** Asegura que todos los elementos de la interfaz funcionen correctamente y que la navegación sea intuitiva.

### Pantalla de Cronómetro

- **Descripción:** Crea una pantalla dedicada para el cronómetro basada en la imagen proporcionada (`cronometro`).
- **Especificaciones:**
  - **Botón de Regreso:** Incluye un botón para regresar a la pantalla principal.
  - **Tamaño de Fuente:**
    - Números del cronómetro: `100px`.
    - Milisegundos: `30px`.
  - **Formato del Cronómetro:** El cronómetro debe seguir el formato `00:00:00` para horas, minutos y segundos, y `000` para los milisegundos.
  - **Funcionalidad del Botón "Limpiar":** Si se presiona el botón "clean" mientras el cronómetro no está en curso, se debe mostrar una alerta o pantalla indicando que "El cronómetro no está en curso".

### Pantalla de Temporizador

- **Descripción:** Crea una pantalla dedicada para el temporizador basada en la imagen proporcionada (`temporizador`).
- **Especificaciones:**
  - **Botón de Regreso:** Incluye un botón para regresar a la pantalla principal.
  - **Tamaño de Fuente:** Los números del temporizador deben tener un tamaño de fuente de `100px`.
  - **Tablero Numérico:**
    - Incluye solo los números del `0` al `9`.
    - Excluye los controles de "set" y "clean".
    - Los bordes del tablero deben tener un grosor de `3px`.
  - **Sonido al Terminar:** Implementa un sonido que se reproduzca cuando el temporizador llegue a `0`.
  - **Funcionalidad del Botón "Limpiar":** Si se presiona el botón "clean" mientras el temporizador no está en curso, se debe mostrar una alerta o pantalla indicando que "Inserta un tiempo a transcurrir".

## Consideraciones Adicionales

- **Botones de Acción:**
  - Distingue los botones por color.
  - Añade íconos que representen claramente la función de cada botón.

- **Pruebas de Rendimiento:**
  - Realiza pruebas de rendimiento al finalizar el desarrollo para asegurar que el proyecto cumpla con los estándares de performance.

