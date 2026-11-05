/* ============================================================
   ADMINISTRACIÓN DE MATERIALES PDF
   ============================================================

   CURSO: Matemática para Ingenieros I
   UNIVERSIDAD: UCSUR
   PERIODO: 2027-1

   CARPETA DE LOS PDF:
   materiales/ucsur/2027-1/matematica-ingenieros-1/

   PARA AGREGAR UN DOCUMENTO:
   1. Copie el archivo PDF a la carpeta indicada.
   2. Agregue una línea a la lista de materiales.
   3. Escriba el título y el nombre exacto del archivo.
   4. Guarde content.js con Ctrl + S.

   PARA OCULTAR TEMPORALMENTE:
   Coloque // delante de la línea correspondiente.

   PARA VOLVER A MOSTRAR:
   Retire los dos símbolos //.

   PARA RETIRAR DE LA LISTA:
   Elimine la línea del documento.

   IMPORTANTE:
   Retirar u ocultar un enlace no elimina el PDF de
   la carpeta ni impide acceder mediante un enlace
   directo que alguien ya conozca.

   En JavaScript los comentarios se escriben con //
   o mediante bloques como este.
   No utilice el símbolo % de LaTeX.
   ============================================================ */

const MATERIALES_MAT_ING_1_2027_1 = [
  { titulo: 'Práctica dirigida 01', archivo: 'practica-01.pdf' },
  { titulo: 'Práctica dirigida 02', archivo: 'practica-02.pdf' },
  { titulo: 'Lista de ejercicios 01', archivo: 'ejercicio-01.pdf' },
  { titulo: 'Material de clase 01', archivo: 'clase-01.pdf' },

  // AGREGUE AQUÍ EL PRÓXIMO DOCUMENTO:
  // { titulo: 'Práctica dirigida 03', archivo: 'practica-03.pdf' },
];

/* ============================================================
   GENERADOR AUTOMÁTICO DE LA LISTA DE PDF

   No es necesario modificar esta función para
   agregar, ocultar o retirar documentos.
   ============================================================ */

function generarListaPDF(documentos, carpeta) {
  const escaparHTML = (valor) => String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  return documentos.map(({ titulo, archivo }) => {
    const nombre = String(archivo);

    if (!/^[a-zA-Z0-9._-]+\.pdf$/i.test(nombre)) {
      return '';
    }

    const url = carpeta + encodeURIComponent(nombre);

    return '<div class="pdf-item">' +
      '<span class="pdf-title">📄 ' + escaparHTML(titulo) + '</span>' +
      '<div class="pdf-actions">' +
      '<button type="button" onclick="mostrarPDF(' +
      "'" + nombre + "'" +
      ')">👁 Ver PDF</button>' +
      '<a href="' + url +
      '" download="' + escaparHTML(nombre) +
      '">⬇ Descargar</a>' +
      '</div></div>';
  }).join('\n');
}


/* ============================================================
   CONTENIDO GENERAL DEL SITIO ACADÉMICO
   ============================================================ */

const SITE = {

  // Para añadir su fotografía, copie el archivo a
  // assets/foto-perfil.jpg y cambie false por true.

  usePortrait: true,
  portraitFile: 'assets/foto-perfil.png',

  pages: {

    // =====================================================
    // INICIO
    // =====================================================

    inicio: `
      <p class="section-kicker">MI ESPACIO ACADÉMICO</p>
      <h2>Bienvenido</h2>

      <p class="lead">
        Bienvenido a mi espacio académico. Soy matemático e investigador
        especializado en ecuaciones diferenciales parciales dispersivas,
        con particular interés en las ecuaciones de Schrödinger no lineales
        y los operadores fraccionarios.
      </p>

      <p>
        Este sitio reúne mi trayectoria académica, mis líneas de investigación,
        publicaciones científicas y actividades docentes.
      </p>

      <div class="feature-grid">
        <a class="feature" href="#investigacion">
          <span class="feature-icon">∂</span>
          <h3>Investigación</h3>
          <p>EDP dispersivas, operadores fraccionarios y estimaciones de Strichartz.</p>
          <span class="feature-link">Explorar →</span>
        </a>

        <a class="feature" href="#publicaciones">
          <span class="feature-icon">≋</span>
          <h3>Publicaciones</h3>
          <p>Artículos científicos y resultados de investigación.</p>
          <span class="feature-link">Consultar →</span>
        </a>

        <a class="feature" href="#docencia">
          <span class="feature-icon">∫</span>
          <h3>Docencia</h3>
          <p>Enseñanza universitaria, cálculo y formación matemática.</p>
          <span class="feature-link">Conocer →</span>
        </a>
      </div>

      <section class="section">
        <p class="section-kicker">FORMACIÓN</p>
        <h2>Trayectoria académica</h2>

        <div class="timeline">
          <div>
            <strong>Doctorado en Ciencias (Matemática)</strong>
            <span>UFRJ, Brasil · 2026</span>
          </div>

          <div>
            <strong>Maestría en Ciencias (Matemática)</strong>
            <span>UFRJ, Brasil · 2019</span>
          </div>

          <div>
            <strong>Licenciatura en Matemática</strong>
            <span>UNAC, Perú · 2024</span>
          </div>

          <div>
            <strong>Bachiller en Matemática</strong>
            <span>UNAC, Perú · 2016</span>
          </div>
        </div>
      </section>
    `,

    // =====================================================
    // PERFIL ACADÉMICO
    // =====================================================

    perfil: `
      <section class="section">
        <p class="section-kicker">SOBRE MÍ</p>
        <h2>Perfil académico</h2>

        <p class="lead">
          Doctor en Ciencias (Matemática) por la Universidade Federal do Rio
          de Janeiro (UFRJ), Brasil. Investigador en ecuaciones diferenciales
          parciales dispersivas, especialmente ecuaciones de Schrödinger no
          lineales con operadores fraccionarios.
        </p>

        <p>
          Docente universitario a tiempo completo en la Universidad Científica
          del Sur y a tiempo parcial en la Universidad Tecnológica del Perú.
        </p>
      </section>

      <section class="section">
        <h2>Formación académica</h2>

        <div class="timeline">
          <div>
            <strong>Doctor en Ciencias (Matemática)</strong>
            <span>Universidade Federal do Rio de Janeiro (UFRJ), Brasil · 2026</span>
          </div>

          <div>
            <strong>Maestro en Ciencias (Matemática)</strong>
            <span>Universidade Federal do Rio de Janeiro (UFRJ), Brasil · 2019</span>
          </div>

          <div>
            <strong>Licenciado en Matemática</strong>
            <span>Universidad Nacional del Callao (UNAC), Perú · 2024</span>
          </div>

          <div>
            <strong>Bachiller en Matemática</strong>
            <span>Universidad Nacional del Callao (UNAC), Perú · 2016</span>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Experiencia profesional</h2>

        <div class="entry">
          <h3>Universidad Científica del Sur</h3>
          <p class="muted">Docente a tiempo completo · Desde marzo de 2025</p>
          <p>
            Responsable del curso Matemática para Ingenieros I (CPE)
            desde agosto de 2025.
          </p>
        </div>

        <div class="entry">
          <h3>Universidad Tecnológica del Perú</h3>
          <p class="muted">Docente a tiempo parcial · Desde marzo de 2024</p>
          <p>Docencia en asignaturas universitarias de matemática.</p>
        </div>
      </section>

      <section class="section">
        <h2>Reconocimientos</h2>
        <p>
          Docente Destacado — Universidad Tecnológica del Perú,
          periodos marzo de 2024, marzo de 2025 y agosto de 2025.
        </p>
      </section>
    `,

    // =====================================================
    // INVESTIGACIÓN
    // =====================================================

    investigacion: `
      <section class="section">
        <p class="section-kicker">RESEARCH</p>
        <h2>Líneas de investigación</h2>

        <p class="lead">
          Mi investigación se desarrolla en el campo de las ecuaciones
          diferenciales parciales dispersivas no lineales. Mis intereses
          comprenden el estudio de problemas de Cauchy y la buena colocación
          local y global mediante la aplicación de herramientas del análisis
          funcional y armónico. En particular, abordo ecuaciones de Schrödinger
          no lineales, sistemas de Schrödinger–Debye y sistemas de Benney,
          así como modelos asociados a operadores fraccionarios elípticos
          e hiperbólicos.
        </p>

        <div class="topic-grid">
          <div class="topic">Ecuaciones de Schrödinger no lineales</div>
          <div class="topic">Ecuaciones difernciales parciales</div>
          <div class="topic">Buena colocación local y global</div>
          <div class="topic">Estimaciones de Strichartz</div>
          <div class="topic">Espacios de Bourgain X<sup>s,b</sup></div>
          <div class="topic">Análisis funcional y armónico</div>
        </div>
      </section>

      <section class="section">
        <h2>Investigación doctoral</h2>

        <h3>
          Ecuación de Schrödinger no lineal cúbica con operadores
          fraccionarios de orden superior
        </h3>

        <p>
          Investigación desarrollada en el Instituto de Matemática de la
          UFRJ-Brail, bajo la orientación del profesor Dr. Adán J. Corcho.
          Se abordaron problemas de buena colocación para la NLS cúbica
          con operadores fraccionarios elípticos e hiperbólicos en dominios
          cilíndricos, con especial atención a soluciones en L². Asimismo,
          se estudió el fenómeno de inflación de norma en espacios de Sobolev
          con índices de regularidad inferiores al umbral crítico.
        </p>

        <p>
          El trabajo emplea herramientas de análisis armónico y estimaciones
          de Strichartz.
        </p>

        <p>
          <a
            href="https://ejde.math.txstate.edu/Volumes/2025/16/abstr.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click aquí para consultar el artículo relacionado ↗
          </a>
        </p>
      </section>
    `,

    // =====================================================
    // PUBLICACIONES CIENTÍFICAS
    // =====================================================

    publicaciones: `
      <section class="section">
        <p class="section-kicker">PUBLICATIONS</p>
        <h2>Publicaciones científicas</h2>

        <p class="lead">
          Artículos publicados en revistas científicas con revisión por pares.
        </p>

        <div class="publication">
          <span class="pub-year">2025 · ARTÍCULO</span>

          <h3>
            L² Solutions for cubic NLS equation with higher order fractional
            elliptic/hyperbolic operators on ℝ×𝕋 and ℝ²
          </h3>

          <p>
            <strong>Adán J. Corcho · Lindolfo P. Mallqui</strong>
          </p>

          <p>
            <em>Electronic Journal of Differential Equations</em>,
            2025, No. 16, pp. 1–17.
          </p>

          <p class="pub-citations">
            Citas recibidas: 4 | Referencias: 22
          </p>

          <div class="link-row">
            <a
              href="https://ejde.math.txstate.edu/Volumes/2025/16/abstr.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artículo publicado ↗
            </a>

            <a
              href="https://arxiv.org/abs/2311.02276"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preprint arXiv ↗
            </a>
          </div>
        </div>

        <p class="muted note">
          El preprint corresponde al mismo artículo publicado;
          no se contabiliza como una publicación independiente.
        </p>
      </section>
    `,

    // =====================================================
    // DOCENCIA
    // =====================================================

    docencia: `
      <section class="section">
        <p class="section-kicker">TEACHING</p>
        <h2>Actividad docente</h2>

        <p class="lead">
          Mi labor docente se caracteriza por un enfoque innovador,
          dinámico e interactivo de la enseñanza universitaria de las
          matemáticas. Integro herramientas digitales como GeoGebra y Python
          para favorecer la visualización de conceptos abstractos,
          la experimentación matemática y el aprendizaje activo.
          Mediante recursos tecnológicos y estrategias didácticas participativas,
          busco fortalecer el razonamiento lógico, el pensamiento crítico
          y la capacidad de los estudiantes para comprender y aplicar
          los fundamentos matemáticos.
        </p>
      </section>

      <section class="section">
        <h2>Áreas de enseñanza</h2>

        <div class="topic-grid">
          <div class="topic">Análisis Real</div>
          <div class="topic">Análisis Funcional</div>
          <div class="topic">Ecuaciones Diferenciales Ordinarias (EDO)</div>
          <div class="topic">Ecuaciones Diferenciales Parciales (EDP)</div>
          <div class="topic">Cálculo I, II y III</div>
          <div class="topic">Álgebra</div>
          <div class="topic">Cálculo Avanzado para Ingeniería</div>
          <div class="topic">Matemática para los Negocios</div>
        </div>
      </section>

      <section class="section">
        <h2>Recursos para estudiantes</h2>

        <p class="lead">
          En este espacio encontrará materiales de clase,
          listas de ejercicios, prácticas dirigidas y
          recursos complementarios organizados por universidad,
          periodo académico y asignatura.
        </p>

        <h3>Universidad Científica del Sur (UCSUR)</h3>

        <h4>Periodo académico 2027-1</h4>

        <details class="course-card">
          <summary>
            <span>📘 Matemática para Ingenieros I</span>
            <span class="course-action">Acceder a materiales ▾</span>
          </summary>

          <p><strong>Periodo académico 2027-1</strong></p>
          <p>Materiales disponibles para los estudiantes:</p>

          <div class="pdf-list">
            ${generarListaPDF(
              MATERIALES_MAT_ING_1_2027_1,
              'materiales/ucsur/2027-1/matematica-ingenieros-1/'
            )}
          </div>

          <!-- VISOR GENERAL DE DOCUMENTOS PDF -->

          <div id="visor-pdf-mat1" hidden>
            <p>
              <button type="button" onclick="cerrarPDF()">
                ✕ Cerrar visor
              </button>
            </p>

            <iframe
              id="visor-pdf-frame"
              title="Visualizador de materiales académicos"
              width="100%"
              height="600"
              style="border: 1px solid #d1d5db; border-radius: 8px;">
            </iframe>
          </div>
        </details>

        <details class="course-card">
          <summary>
            <span>📘 Cálculo I</span>
            <span class="course-action">Acceder a materiales ▾</span>
          </summary>
          <p>Materiales del curso</p>
          <p>Próximamente se incorporarán los documentos.</p>
        </details>

        <details class="course-card">
          <summary>
            <span>📘 Matemática II</span>
            <span class="course-action">Acceder a materiales ▾</span>
          </summary>
          <p>Materiales del curso</p>
          <p>Próximamente se incorporarán los documentos.</p>
        </details>

        <h3>Universidad Tecnológica del Perú (UTP)</h3>

        <div class="topic-grid">
          <div class="topic">
            Periodo 2026-2 — Cursos y materiales
          </div>
        </div>
                <!-- LABORATORIO -->
        <h3>Laboratorio</h3>

        <div class="topic-grid">

          <div class="topic">
            <h4 style="font-size: 21px; margin-bottom: 12px;">Python</h4>
            <p>
              Laboratorios interactivos desarrollados
              en Python para la visualización y el
              análisis matemático.
            </p>
            <a href="laboratorios/python.html">
              Acceder al laboratorio Python →
            </a>
          </div>

          <div class="topic">
            <h4 style="font-size: 21px; margin-bottom: 12px;">GeoGebra</h4>
            <p>
              Construcciones dinámicas para explorar
              conceptos matemáticos mediante
              representaciones gráficas interactivas.
            </p>
            <a href="laboratorios/geogebra.html">
              Acceder al laboratorio GeoGebra →
            </a>
          </div>

        </div>
      </section>
    `,

    // =====================================================
    // ACTIVIDADES ACADÉMICAS
    // =====================================================

    actividades: `
      <section class="section">
        <p class="section-kicker">ACADEMIC ACTIVITIES</p>
        <h2>Actividades académicas y científicas</h2>

        <p class="lead">
          Interés en el intercambio científico, la colaboración
          internacional y la difusión de las matemáticas.
        </p>

        <div class="entry">
          <h3>Organización de eventos científicos</h3>
          <p>
            Participación en iniciativas de organización de encuentros
            académicos y congresos internacionales de matemática,
            orientados a fortalecer la cooperación entre instituciones
            de Perú y Brasil.
          </p>
        </div>

        <div class="entry">
          <h3>Colaboración académica</h3>
          <p>
            Interés en proyectos conjuntos sobre ecuaciones diferenciales
            parciales dispersivas, análisis armónico y ecuaciones
            de Schrödinger no lineales.
          </p>
        </div>

        <p class="muted note">
          Se incorporarán eventos específicos cuando estén confirmados
          sus nombres, fechas y enlaces oficiales.
        </p>
      </section>
    `
  }
};
