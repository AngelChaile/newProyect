// Calcular los días juntos
const contador = document.getElementById('contador');
const fechaInicio = new Date('2011-06-11'); // Cambia por tu fecha real
const hoy = new Date();
const diasJuntos = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
contador.textContent = diasJuntos;

// Función para mostrar el mensaje secreto con animación
function mostrarSorpresa() {
    const mensaje = document.getElementById('mensaje-secreto');
    mensaje.style.display = "block";
    mensaje.style.animation = "fadeIn 1.5s ease-in-out";
}

// Inicializar el carrusel Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Función para generar corazones flotantes
function crearCorazon() {
    const corazon = document.createElement("span");
    corazon.classList.add("corazon");
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 600);

function mostrarEnlaceSecreto() {
    document.getElementById("enlace-secreto").style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el corazón dentro del mensaje secreto
    const mensajeSecreto = document.getElementById('mensaje-secreto');

    // Verificamos si el mensaje existe
    if (mensajeSecreto) {
        mensajeSecreto.addEventListener("click", function (event) {
            if (event.target.textContent.includes("❤️")) {
                window.location.href = "sorpresa.html";
            }
        });
    }
});



