
function animateCountUp(element, target) {
    let count = 0;
    const duration = 2000; // Duración total de la animación en ms
    const increment = target / (duration / 10); // Incremento en cada intervalo de 30ms

    const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(counter);
        }
        element.textContent = `+ ${Math.floor(count)} ${element.dataset.label}`;
    }, 30);
}

document.addEventListener("DOMContentLoaded", () => {
    const experienceElement = document.getElementById("experience");
    const clientsElement = document.getElementById("clients");

    experienceElement.dataset.label = "AÑOS DE EXPERIENCIA";
    clientsElement.dataset.label = "CLIENTES SATISFECHOS";

    animateCountUp(experienceElement, 5); // Incrementa hasta 5
    animateCountUp(clientsElement, 20); // Incrementa hasta 15
});

let logoNavBar = document.getElementById('logonav');
let ultimaPosicionScroll = window.scrollY;
let header = document.getElementById('header');
let headerOculto = false; // Variable para controlar si el header está oculto

window.addEventListener('scroll', function () {
    let posicionActual = window.scrollY;

    if (posicionActual > ultimaPosicionScroll && !headerOculto) {
        // Usuario hace scroll hacia abajo y el header no está oculto
        header.style.visibility = "hidden"; // Ocultar el header
        logoNavBar.style.visibility = "hidden";
        headerOculto = true;
    } else if (posicionActual < ultimaPosicionScroll && headerOculto) {
        // Usuario hace scroll hacia arriba y el header está oculto
        header.style.visibility = "visible"; // Mostrar el header
        logoNavBar.style.visibility = "visible";
        headerOculto = false;
    }

    ultimaPosicionScroll = posicionActual; // Actualizar la posición del scroll
});

let MenuCelu = document.getElementById('menuCELU');
let button = document.getElementById('burguer');
let body = document.getElementById('body');

let icon = button.querySelector('i');

// Función para cerrar el menú
function cerrarMenu() {
    body.style.overflow = 'auto';
    MenuCelu.style.left = '-200%';
    logoNavBar.style.visibility = 'visible';
    icon.classList.remove('bi-x-lg');
    icon.classList.add('bi-list');
}

// Toggle del menú con el botón
button.addEventListener('click', function () {
    if (MenuCelu.style.left == '0px') {
        cerrarMenu();
    } else {
        body.style.overflow = 'hidden';
        MenuCelu.style.left = '0px';
        logoNavBar.style.visibility = 'hidden';
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    }
});

// Cerrar el menú al hacer clic en un enlace
let enlacesMenu = document.querySelectorAll('.aCELU');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function () {
        cerrarMenu();
    });
});

    

