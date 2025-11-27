<h1 style="font-size: 48px; font-weight: bold;">Buscador de Noticias Internacionales con React</h1>

<p><strong>Integrantes:</strong><br>
- Andrés Duque<br>
- Bryan Mayo<br>
- Jorge Iván Marín<br>
- Andrés Marulanda</p>

<p><strong>Profesor:</strong> Germán Adolfo Franco Posada</p>

<hr>

<h2 style="font-size: 36px;">Descripción del Proyecto</h2>

<p>
Este proyecto consiste en una aplicación web desarrollada en React.js que permite consultar y mostrar noticias recientes según diferentes categorías utilizando una API pública de noticias.
</p>

<p>
El usuario puede seleccionar una categoría como tecnología, deportes, salud, entretenimiento, ciencia o negocios, y obtener las noticias presionando un botón.  
El proyecto debe realizar todo el manejo de datos sin utilizar el hook <code>useEffect</code>.
</p>

<hr>

<h2 style="font-size: 36px;">Objetivo del Proyecto</h2>

<p>
Aplicar el manejo de eventos y estados en React mediante el consumo de una API pública, usando únicamente el hook <code>useState</code>.
</p>

<p>El proyecto busca demostrar:</p>

<ul>
  <li>Control de la interacción del usuario.</li>
  <li>Consumo de información externa.</li>
  <li>Representación dinámica y clara de los datos.</li>
</ul>

<hr>

<h2 style="font-size: 36px;">Requisitos Funcionales</h2>

<ul>
  <li>Seleccionar una categoría de noticias desde un menú desplegable.</li>
  <li>Consultar las noticias mediante un botón que realiza la petición a la API.</li>
  <li>Cada noticia debe mostrar:
    <ul>
      <li>Título</li>
      <li>Fuente o autor</li>
      <li>Imagen destacada (si existe)</li>
      <li>Enlace al artículo original</li>
    </ul>
  </li>
  <li>Mostrar un mensaje cuando no haya noticias o ocurra un error.</li>
  <li>Mostrar mensaje o animación de carga mientras se realiza la solicitud.</li>
  <li>La interfaz debe ser clara, agradable y adaptable a diferentes dispositivos.</li>
</ul>

<hr>

<h2 style="font-size: 36px;">Requisitos Técnicos</h2>

<ul>
  <li>El proyecto debe estar desarrollado en React.js con componentes funcionales.</li>
  <li>Uso exclusivo del hook <code>useState</code>.</li>
  <li>Las peticiones a la API deben realizarse con <code>fetch()</code> dentro de una función activada por un evento.</li>
  <li>API permitida:
    <ul>
      <li>NewsAPI (https://newsapi.org)</li>
      <li>Alternativas: Mediastack, GNews</li>
    </ul>
  </li>
  <li>Se debe utilizar Bootstrap 5 para la estructura y estilos visuales.</li>
</ul>

<hr>

<h2 style="font-size: 36px;">Requisitos de Entrega</h2>

<ul>
  <li>Subir el proyecto a un repositorio público de GitHub.</li>
  <li>Incluir un archivo README.md con:
    <ul>
      <li>Descripción del proyecto</li>
      <li>API utilizada</li>
      <li>Pasos para ejecutar la aplicación</li>
    </ul>
  </li>
  <li>Incluir capturas de pantalla o un video corto demostrando el funcionamiento.</li>
</ul>

<hr>

<h2 style="font-size: 36px;">Criterios de Evaluación</h2>

<ul>
  <li>Consumo correcto de la API.</li>
  <li>Uso adecuado de <code>useState</code> para gestionar estados y eventos.</li>
  <li>Presentación clara y organizada de las noticias.</li>
  <li>Manejo adecuado de errores y mensajes informativos.</li>
  <li>Calidad del código: orden, legibilidad y estructura.</li>
  <li>Buena documentación en GitHub.</li>
</ul>
<img width="624" height="277" alt="image" src="https://github.com/user-attachments/assets/2425047c-f794-48bc-963f-f2437beeb05b" />
1.	La imagen muestra una página web de noticias.
A la izquierda hay un menú de categorías (General, Negocio, Salud, Ciencia, etc.).
En el centro aparece el título “hub news” y un mensaje indicando que no hay noticias disponibles.
En la parte inferior se ve el footer con secciones, contacto y derechos de autor
<img width="624" height="271" alt="image" src="https://github.com/user-attachments/assets/385212bd-c525-498c-bb7a-05bfa336ca69" />
2.	La imagen muestra la página Noticias, donde aparecen varias tarjetas de noticias con imagen, título, descripción y un botón para ver cada noticia completa.
<img width="624" height="243" alt="image" src="https://github.com/user-attachments/assets/e161d9b2-9c99-4d65-b84f-d04d02fdd03c" />
3.	La imagen muestra la sección de noticias deportivas de la página.
Aparecen tres artículos principales, cada uno con una imagen de las diferentes noticias de 
<img width="624" height="245" alt="image" src="https://github.com/user-attachments/assets/4dcf755d-8843-46e7-9302-291cb046c1b8" />
4.	El botón “Leer mas” sirve para abrir la noticia completa.
Al hacer clic, lleva al usuario a la página donde se muestra toda la información del artículo seleccionado.
<img width="624" height="266" alt="image" src="https://github.com/user-attachments/assets/6c409e80-68a8-4b54-93e4-c5527a3da2ba" />
5.	Luego de seleccionar ver noticia, se abre la pagina principal que indicó el usuario.



