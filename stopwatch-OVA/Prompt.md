 Proyecto web StopWatch

Vamos a realizar un proyecto para la realización de una aplicación web cuya funcionalidad es la mostrar un reloj digital
que nos pueda servir como cronómetro o alarma.
Necesito el código de los ficheros del proyectos

## Funcionalidades

* Tendremos al inicio de la página un menú gráfico con  EMOJIS que representan un cronómetro y una alarma
* Al pulsar cualquier  opción nos llevara al reloj seleccionado
  * desaparecerá el menú con scroll suave lateral
* Funcionalidades para el cronómetro...
    * El reloj mostrará horas, minutos y segundos, y también milésimas de segundo
    * Tendrá un mismo botón para empezar y parar alternándose dependiendo del estado del reloj
    * Tendrá otro botón para reiniciar el reloj a cero y parando la ejecución si estuviera en marcha
* Funcionalidades para la alarma...
    * Mostrará un reloj digital con horas, minutos, segundos y milésimas donde se pondrán el tiempo de inicio, al principio cero
    * Mostrar un teclado numérico para introducir las horas, minutos y segundos para determinar el tiempo de inicio
    * Una vez introducido el tiempo de inicio habrá un botón de iniciar la cuenta atrás.
    * Al iniciar la cuenta atrás desaparece el teclado numérico y aparecen los botones de pausa y reinicio
    * El botón de pausa alterna entre las opciones de pausa y continuar accionando cada funcionalidad al reloj
    * El botón de reinicio para el reloj y vuelve a poner el tiempo inicial en el reloj y en pausa
* 
* Cuando estamos en los relojes aparecerá una opción de volver al menu de inicio parando el reloj y volviendo al menú

## Visualización

* Presentar todo lo más grandes posibles en la página, siendo responsive
* Todo tiene que estar centrado tanto horizontal como vertical
* Botones estilados con apariencia distinta a un botón normal, con bordes resaltados y redondeados
* Los botones están debajo del reloj y en línea, con tamaño de fuente algo más pequeña que el reloj 
* Los botones presentarán colores de fondo diferentes para cada estado, con colores que representen ese estado
* Usar EMOJIS divertidos que acompañen el texto de los botones
* Usa tailwind para aplicar CSS

Un ejemplo de visualización sería https://raw.githubusercontent.com/LIDR-academy/AI4Devs-stopwatch/main/res/stopwatch.png

## Código

* Usar Javascript Vainilla
* Separar la lógica de presentación de la lógica funcional
