document.getElementById('secciones-button').addEventListener('click', function() {
    var seccionesMenu = document.getElementById('secciones-menu');
    var body = document.querySelector('body');
    seccionesMenu.style.display = 'flex';
    seccionesMenu.style.justifyContent = 'space-between';

    setTimeout(function() {
        seccionesMenu.classList.add('show-menu');
    }, 0);

    //ocultar el contenido principal
    body.style.overflow = 'hidden';
});

document.getElementById('close-menu').addEventListener('click', function() {
    var seccionesMenu = document.getElementById('secciones-menu');
    var body = document.querySelector('body');

     // Ocultar el menú gradualmente
    seccionesMenu.classList.remove('show-menu');
    
    // Restaurar el scroll en el contenido principal después de la animación
    setTimeout(function() {
        seccionesMenu.style.display = 'none';
        body.style.overflow = 'auto';
    }, 300); // 300ms es la duración de la transición CSS
});

