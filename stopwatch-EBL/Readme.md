# Cronómetro y Temporizador

## Descripción del Proyecto

Este proyecto es una aplicación web sencilla que permite a los usuarios seleccionar entre un cronómetro y un temporizador de cuenta regresiva. La aplicación tiene una interfaz amigable y dos modos de visualización: un cronómetro para medir el tiempo transcurrido y una cuenta regresiva que permite a los usuarios ingresar un tiempo específico y contar hacia atrás hasta llegar a cero. Además, incluye una funcionalidad para cambiar entre temas claro y oscuro.

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

1. **index.html**: Contiene la estructura HTML del proyecto.
2. **styles.css**: Contiene los estilos CSS para la interfaz de usuario.
3. **script.js**: Contiene la lógica JavaScript que hace funcionar la aplicación.

## Funcionalidades

### 1. Pantalla de Selección

- **Selección de Cronómetro**: Permite al usuario navegar a la pantalla del cronómetro.
- **Selección de Cuenta Regresiva**: Permite al usuario navegar a la pantalla de la cuenta regresiva.

### 2. Cronómetro

- **Iniciar/Detener Cronómetro**: El botón "Start" inicia la cuenta del cronómetro, que se actualiza cada 10 milisegundos. El texto del botón cambia a "Stop" cuando está en funcionamiento.
- **Limpiar Cronómetro**: El botón "Clear" reinicia el cronómetro a 00:00:00.000 y detiene la cuenta si estaba en marcha.
- **Volver Atrás**: Permite al usuario regresar a la pantalla de selección.

### 3. Cuenta Regresiva

- **Ingreso de Números**: Los botones numéricos permiten al usuario ingresar el tiempo deseado para la cuenta regresiva.
- **Configurar Cuenta Regresiva**: El botón "Set" establece el tiempo ingresado y muestra el botón de inicio.
- **Iniciar/Detener Cuenta Regresiva**: El botón "Start" comienza la cuenta regresiva, reduciendo el tiempo cada 10 milisegundos. El texto del botón cambia a "Stop" cuando está en funcionamiento.
- **Limpiar Cuenta Regresiva**: El botón "Clear" reinicia la cuenta regresiva a 00:00:00.000 y restablece la interfaz para permitir la entrada de un nuevo tiempo.
- **Volver Atrás**: Permite al usuario regresar a la pantalla de selección.

### 4. Cambio de Tema

- **Cambiar entre Tema Claro/Oscuro**: El botón "Cambiar tema" permite alternar entre un tema claro y uno oscuro para la interfaz.

## Estructura de Archivos

- **index.html**: Define la estructura HTML del proyecto y los elementos DOM principales, incluyendo los botones y pantallas para el cronómetro y la cuenta regresiva.
- **styles.css**: Proporciona los estilos visuales de la aplicación, como colores de fondo, estilos de botones, y la transición entre temas claro y oscuro.
- **script.js**: Implementa la lógica de la aplicación, incluyendo la funcionalidad del cronómetro, la cuenta regresiva, la navegación entre pantallas, y el cambio de tema.

## Uso

1. **Abrir el archivo `index.html`** en un navegador web.
2. **Seleccionar la opción deseada** (Cronómetro o Cuenta Regresiva) en la pantalla principal.
3. **Utilizar las funciones** del cronómetro o la cuenta regresiva según se necesite.
4. **Cambiar el tema** utilizando el botón "Cambiar tema" para alternar entre los modos claro y oscuro.

## Requisitos Técnicos

Este proyecto no tiene dependencias externas y funciona en cualquier navegador moderno con soporte para HTML5, CSS3 y JavaScript ES6.

## Personalización

- **Estilos**: Los estilos se pueden personalizar modificando el archivo `styles.css`.
- **Lógica**: La funcionalidad del cronómetro y la cuenta regresiva se puede ajustar modificando el archivo `script.js`.

## Contribuciones

Las contribuciones son bienvenidas. Puedes clonar el repositorio, crear una rama con tus cambios, y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.