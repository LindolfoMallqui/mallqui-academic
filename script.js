 
const main = document.getElementById('main');
const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('mobile-toggle');
const overlay = document.getElementById('overlay');

function closeMenu() {
    sidebar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    overlay.hidden = true;
}

function route() {
    const id = decodeURIComponent(
        location.hash.replace(/^#/, '')
    ) || 'inicio';

    const key = Object.hasOwn(SITE.pages, id) ? id : 'inicio';

    main.innerHTML = SITE.pages[key];

    document.querySelectorAll('[data-route]').forEach(a => {
        const active = a.dataset.route === key;

        a.classList.toggle('active', active);

        if (active) {
            a.setAttribute('aria-current', 'page');
        } else {
            a.removeAttribute('aria-current');
        }
    });

    closeMenu();

    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
}

toggle.addEventListener('click', () => {
    const open = !sidebar.classList.contains('open');

    sidebar.classList.toggle('open', open);

    toggle.setAttribute(
        'aria-expanded',
        String(open)
    );

    overlay.hidden = !open;
});

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

window.addEventListener('hashchange', route);

document.getElementById('year').textContent =
    new Date().getFullYear();

if (SITE.usePortrait) {
    const img = document.createElement('img');

    img.src = SITE.portraitFile;

    img.alt = 'Fotografía del Dr. Lindolfo Paul Mallqui Espinoza';

    document.getElementById('portrait').replaceChildren(img);
}

route();

/* ==========================================
   VISUALIZADOR DE PDF - MATEMÁTICA 2027-1
   ========================================== */

function mostrarPDF(archivo) {
    const ruta = "materiales/ucsur/2027-1/matematica-ingenieros-1/";

    const visor = document.getElementById("visor-pdf-mat1");
    const frame = document.getElementById("visor-pdf-frame");

    if (!visor || !frame) return;

    frame.src = ruta + encodeURIComponent(archivo);

    visor.hidden = false;

    visor.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function cerrarPDF() {
    const visor = document.getElementById("visor-pdf-mat1");
    const frame = document.getElementById("visor-pdf-frame");

    if (!visor || !frame) return;

    visor.hidden = true;

    frame.src = "";
}
