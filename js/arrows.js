document.addEventListener('DOMContentLoaded', function () {
    // Obtén la referencia al header
    const header = document.querySelector('header');

    // Obtén las referencias a las flechas
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    // Array de rutas de imágenes para cada flecha
    const arrowImages = [
        'url(../img/frame1-2-3/fondo_principal_mobile_2.webp)',
        'url(../img/frame1-2-3/fondo_principal_mobile_3.webp)'
    ];

    // Índice actual en el array de imágenes
    let currentImageIndex = 0;

    // Función para cambiar la imagen del header al hacer clic en la flecha izquierda
    arrowLeft.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + arrowImages.length) % arrowImages.length;
        header.style.backgroundImage = arrowImages[currentImageIndex];
    });

    // Función para cambiar la imagen del header al hacer clic en la flecha derecha
    arrowRight.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % arrowImages.length;
        header.style.backgroundImage = arrowImages[currentImageIndex];
    });
});
