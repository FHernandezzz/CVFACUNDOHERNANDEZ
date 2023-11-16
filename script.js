document.addEventListener("DOMContentLoaded", function () {
    const cambiarTemaBoton = document.getElementById("cambiar-tema");

    if (cambiarTemaBoton) {
        cambiarTemaBoton.addEventListener("click", function () {
            document.body.classList.toggle("tema-oscuro");

            const esModoOscuro = document.body.classList.contains("tema-oscuro");
            cambiarTemaBoton.innerText = esModoOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro";
        });
    }
});
