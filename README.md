---
Autor: Javier Calvo

Estudiane ASIR Centro Don Bosco

---

# Ejercicio: Práctica de Velázquez

Esta práctica nos ha servido para recordar la creación de páginas webs con HTML, CSS y una introducción a JavaScript, ya  que dimos poco el año pasado y tuvimos que aprender algunas cosas.

Aquí la explicación de como funciona mi página web:

## Maquetación de la página

La estructura del HTML se basa en una **estructura básica** y  general del **HTML5**. La forma en la que se estructura es la siguiente:
````html
<body>
    <header>Con el título</header>
    <aside>Carrusel de las imágenes</aside>
    <section>
        <article> Cada articulo </article>
    </section>
</body>
````

Esto se forma la estructura básica, luego es cosa del **CSS** donde la disposición de cada bloque funciona y se vea de una manera u 

## Estilos escogidos

La hoja de estilos no ha sido de gran dificultad, ya que muchas de las **propiedades** que he utilizado, por no decir todas, eran conocidas.
Por hacer un pequeño resumen de que hay:
````css
section{
    display: block;
}

aside{
    display:none;
    overflow: hidden;
}
.is-active{
    display: none;
}
````
La propiedad _display_ era la más importante para la utilización de JS.
Con ello podíamos mostrar y ocultar las imágenes que queríamos y necesitabamos.

## JavaScrip
El uso de **JavaScrip** fue sin duda lo más dificil, ya que veníamos de haber dado poco el curso pasado,  pero no fue razón para no usarlo.

==Lo que usé fue javascript==, deje de lado _jQuery_, ya que me parecia más sencillo usar js de primeras. Lo que usé fue:
````javascript
document.querySelectorAll('class').onclick;
function cambiar (){};
tabs.forEach(conent);
````

Esto lo aprendí de videos que utilicé, ya que sabía 0 de javascrip.
Los videos que utilicé fueron los siguientes:

[Simple Tabs del section] (https://www.youtube.com/watch?v=3d8AwNea4lM&ab_channel=FRONTRU-WebTutorials)

[Por Up Imagenes] (https://www.youtube.com/watch?v=QghhoJBdw7A&ab_channel=Mr.WebDesigner)

## Selección de la Estructura

La forma en la que he ido realizando las diferentes versiones ha sido de manera lineal:
1. Maquetación del header, aside, y sections
2. Colocación del header y el aside listos
3. Primer uso del _JavaScrip_
4. Colocación de las imágenes y el texto con el JS hecho
5. El JS del PopUp de las imágenes
6. Creación final del **README.md**

### ¿Cómo se encuentra el proyecto final?

[] Fase de testeo

[] Trabajando en ello

[x] Estado Final

### Tiempo utilizado para el proyecto

Al ser el primero de hace tiempo, me he visto algo más atascado  pero sin problemas. Un resumen puede ser:

| X | TIEMPO REQUERIDO | RESULTADO | REQUERIMIENTO |
| -- | -- | -- | -- |
| HTML | Poco | Bueno | Muy poco |
| CSS | Algo | Normal | Algo de ayuda |
| JavaScript | Mucho | Muy bueno | Bastante ayuda |

### Opinion personal

==En general, le he metido caña a este trabajo, ya que he necesitado tiempo para trabajar en ello.==

No obstante, el resultado que he obtenido **ha sido bueno** en mi  opinión, ya que al final ha resultado que lo mejor que me ha salido  es el javascript, algo que en un principio no lo iba a pensar.

Siempre tengo una frase para estas cosas:

>Hazlo o no lo hagas, pero no lo intentes - Yoda
