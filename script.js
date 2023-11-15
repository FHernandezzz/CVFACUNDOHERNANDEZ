document.addEventListener("DOMContentLoaded", function () {
    const cambiarTemaBoton = document.getElementById("cambiar-tema");

    if (cambiarTemaBoton) {
        cambiarTemaBoton.addEventListener("click", function () {
            // Alterna el tema en el cuerpo
            document.body.classList.toggle("tema-oscuro");

            // Cambia el texto del botón según el tema
            const esModoOscuro = document.body.classList.contains("tema-oscuro");
            cambiarTemaBoton.innerText = esModoOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro";
        });
    }
});
