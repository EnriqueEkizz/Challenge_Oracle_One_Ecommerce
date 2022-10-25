// ## Funciones para boton buscar en HEADER

// panel_search, mostrar / ocultar barra busqueda sobre movil
let panel_search = false;

// ## add o delete estilo 'show__header__content' a 'header__content-floating'
const showSearchPane = () => {
    // # Invertir estado true / false
    panel_search = !panel_search;

    // # Tomar bloque
    let panel = document.getElementById('header__content_floating');

    // # add / delete
    if (panel_search) {
        panel.classList.add('show__header__content');
    } else {
        panel.classList.remove('show__header__content');
    } 
}

// Agregar evento click
document.getElementById('btnShowSearchPane').addEventListener('click', showSearchPane);
document.getElementById('btnCloseSearchPane').addEventListener('click', showSearchPane);