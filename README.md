<h1 style="font-size: 48px; font-weight: bold;">Buscador de Noticias Internacionales con React</h1>

<p><strong>Integrantes:</strong><br>
- Andrés Duque<br>
- Bryan Alejandro Mayo<br>
- Jorge Iván Marín<br>
- Jose Andrés Marulanda</p>

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
<h2 style="font-size: 36px;">Capturas de Pantalla y Explicación de la Página Web</h2>

<h3 style="font-size: 28px;">1. Página principal sin resultados</h3>
<img width="100%" alt="Página principal sin noticias" src="https://github.com/user-attachments/assets/2e97c68a-9a03-49e6-954f-27c45ff6e8ab" />
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/012d3b12-20d0-45ae-8663-893b5ea05c83" />


<p>
En esta vista se muestra la estructura principal de la página.  
A la izquierda aparece el menú de categorías (General, Negocios, Salud, Ciencia, etc.).  
En el centro se encuentra el título <strong>“Hub News”</strong> y un mensaje que indica que aún no hay noticias disponibles.  
En la parte inferior se observa el footer con secciones adicionales, información de contacto y derechos de autor.
</p>

<hr>

<h3 style="font-size: 28px;">2. Página de noticias con tarjetas informativas</h3>
<img width="100%" alt="Listado de noticias" src="https://github.com/user-attachments/assets/385212bd-c525-498c-bb7a-05bfa336ca69" />

<p>
Aquí se muestra la vista donde se cargan las noticias consultadas desde la API.  
Cada tarjeta incluye:
</p>

<ul>
  <li>Imagen principal del artículo</li>
  <li>Título de la noticia</li>
  <li>Breve descripción</li>
  <li>Botón para ver la información completa</li>
</ul>

<hr>

<h3 style="font-size: 28px;">3. Noticias filtradas por categoría (Deportes)</h3>
<img width="100%" alt="Noticias deportivas" src="https://github.com/user-attachments/assets/e161d9b2-9c99-4d65-b84f-d04d02fdd03c" />

<p>
En esta vista se muestran únicamente las noticias pertenecientes a la categoría seleccionada, en este caso: <strong>Deportes</strong>.  
Cada tarjeta representa un artículo distinto con su imagen y contenido relacionado.
</p>

<hr>

<h3 style="font-size: 28px;">4. Vista previa y acceso a la noticia completa</h3>
<img width="100%" alt="Botón leer más" src="https://github.com/user-attachments/assets/4dcf755d-8843-46e7-9302-291cb046c1b8" />

<p>
El botón <strong>“Leer más”</strong> permite acceder a la noticia completa.  
Al hacer clic, el usuario es redirigido a la vista individual del artículo para ver toda la información disponible.
</p>

<hr>

<h3 style="font-size: 28px;">5. Página del artículo completo</h3>
<img width="100%" alt="Artículo completo" src="https://github.com/user-attachments/assets/6c409e80-68a8-4b54-93e4-c5527a3da2ba" />

<p>
Después de seleccionar la opción de ver la noticia, la aplicación abre la página original o la vista completa del artículo seleccionado, mostrando todos sus detalles para el usuario.
</p>
<hr>

<h3 style="font-size: 28px;">6. Footer</h3>
<p>Se añadió un nuevo footer al sitio, incluyendo información de contacto, ubicación (Risaralda, Pereira) y los créditos de creación del proyecto.</p>
<img width="1279" height="244" alt="image" src="https://github.com/user-attachments/assets/016fa6cd-2fe0-4a15-9068-c22afcd42e76" />


