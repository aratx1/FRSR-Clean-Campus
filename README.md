# Redireccionador de Moodle (FRSR)

¡Hola! Esta pequeña aplicación (extensión) sirve para arreglar un detalle molesto del campus virtual de la FRSR (UTN). 

**¿Qué hace exactamente?** 
Cuando intentes entrar a la página principal de "Mis Cursos" (`my/index.php`), te enviará automáticamente y en un parpadeo a la vista clásica donde sí puedes gestionar tus materias (`my/courses.php`). ¡Así de simple! No requiere programar ni configurar nada raro.

---

## 🛠️ Cómo instalar la extensión (Paso a Paso)

Instalarla es súper fácil y seguro, ya que los archivos están en tu propia computadora. Busca tu navegador favorito en la lista de abajo y sigue las instrucciones:

### 🌐 Google Chrome, Brave u Opera
1. Abre tu navegador.
2. Escribe en la barra de direcciones de arriba (donde van las URLs) lo siguiente y presiona Enter:
   - En **Chrome**: `chrome://extensions/`
   - En **Brave**: `brave://extensions/`
   - En **Opera**: `opera://extensions/`
3. Vas a ver un botón o interruptor arriba a la derecha que dice **"Modo desarrollador"** (o "Developer mode"). **Actívalo**.
4. Ahora aparecerán nuevos botones arriba a la izquierda. Haz clic en el que dice **"Cargar descomprimida"** (o "Load unpacked").
5. Se abrirá una ventanita de Windows. Busca y selecciona **la carpeta completa** donde descargaste/guardaste estos archivos (la carpeta `FRSR Restore - AreaPersonal`).
6. ¡Listo! Ya está instalada y funcionando.

### 🌊 Microsoft Edge
1. Abre Edge y escribe en la barra de direcciones: `edge://extensions/` y presiona Enter.
2. En el menú que aparece a la izquierda (abajo de todo), enciende el interruptor que dice **"Modo de desarrollador"**.
3. Haz clic en el botón que dice **"Cargar desempaquetada"** (arriba a la derecha).
4. Elige la carpeta donde están estos archivos (la carpeta `FRSR Restore - AreaPersonal`).
5. ¡Listo! La extensión ya hace su magia.

### 🦊 Mozilla Firefox
1. Abre Firefox y escribe en la barra de direcciones: `about:debugging#/runtime/this-firefox`
2. Haz clic en el botón que dice **"Cargar complemento temporal..."**.
3. Se abrirá una ventana. Ve a la carpeta de estos archivos (`FRSR Restore - AreaPersonal`) y selecciona un archivo en específico: el que se llama `manifest.json`.
4. ¡Listo! Ya puedes ir al Moodle y ver la redirección en acción.

---

## 🚀 ¿Qué mejoró respecto a la extensión anterior?

Si venías del proyecto original ([FRSR-Clean-Campus de aratx1](https://github.com/aratx1/FRSR-Clean-Campus/tree/e93c43d3b21fdba521023115410fcaa6c0cfe027)), notarás que esta versión funciona de una manera totalmente distinta y optimizada:

- **Cero Bugs Visuales:** La extensión anterior usaba un script (`content.js`) que borraba elementos visuales de la página una vez cargados. Esto causaba que la página de Moodle se "rompiera" al cargar cursos nuevos o que funcionara un poco mal. Ahora, simplemente usamos una API nativa del navegador (`declarativeNetRequest`) que te **redirige instantáneamente** a la vista clásica y original de Moodle sin tener que modificar la página.
- **Sin necesidad de programar:** Antes tenías que abrir el código fuente, escribir a mano el nombre exacto de cada materia que querías ocultar y guardarlo. Ahora, al redirigirte a la vista `courses.php`, aprovechas el sistema nativo de Moodle.
- **Compatibilidad Total:** La versión anterior estaba pensada solo para Chromium. Esta nueva versión se adaptó utilizando estándares modernos de "Manifest V3" y soporte para `gecko`, por lo cual es **100% compatible** tanto con navegadores Chromium (Chrome, Edge, Brave, etc.) como con **Firefox**, funcionando a la perfección en cualquiera de ellos.

---

   TODO LISTO LOCO !!! Nota: Esta extensión NO te elimina del curso. Si quieres volver a ver las materias ocultas borra el nombre de la materia en el archivo content.js y guarda el archivo. Elimina la extensión de tu navegador y después adjunta la nueva extensión actualizada al apartado de extensiones de tu navegador. Solo funciona para computadora

ACTUALIZACIÓN OCULTANDO EL DROPDOWN DE "Mis cursos": ([HideDropdown](https://github.com/aratx1/FRSR-Clean-Campus/tree/%2B_hide_dropdown))

Si tienes algún problema con la extensión o quieres sugerirme una idea puedes preguntar por Arantxa Reinoso en el grupo de UTN Chat General o Finales UTN. Si te sirvió la extensión considera seguirme y añadir a favoritos este código. Esta extensión es GRATUITA y de CODIGO ABIERTO pero tiene Derechos de Autor, si ves a alguien comerciando con este código reportamelo inmediatamente. Las donaciones son completamente opcionales y libre al criterio de quienes usan esta extensión. Alias: focas.nx
