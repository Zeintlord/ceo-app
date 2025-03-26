
const form = document.getElementById("contact-form");


emailjs.init("-qEJ03xGsxAV5GLDO"); // Reemplaza con tu User ID de EmailJS

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío estándar del formulario
    const alertaV = document.getElementById("alertaV");
    const alertaR = document.getElementById("alertaR");
    const serviceID = "service_saint";
    const templateID = "template_423ddzm";
    emailjs.sendForm(serviceID, templateID, this).then(
        function () {
            alertaV.classList.remove("d-none");
            // Ocultar la alerta después de 4 segundos
            setTimeout(function () {
                alertaV.classList.add("d-none");
            }, 4000);
            form.reset();
        },
        function (error) {
            alertaR.classList.remove("d-none");
            // Ocultar la alerta después de 3 segundos
            setTimeout(function () {
                alertaR.classList.add("d-none");
            }, 3000);
        }
    );
});
