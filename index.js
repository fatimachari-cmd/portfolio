/* ===== FILTROS DE PROYECTOS ===== */

const filtros = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".proyecto");

filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {

        const categoria = filtro.dataset.filtro;

        filtros.forEach(function (boton) {
            boton.classList.remove("activo");
        });

        filtro.classList.add("activo");

        proyectos.forEach(function (proyecto) {

            if (categoria === "todos") {
                proyecto.style.display = "block";
            }
            else if (proyecto.classList.contains("proyecto-" + categoria)) {
                proyecto.style.display = "block";
            }
            else {
                proyecto.style.display = "none";
            }

        });

    });

});


/* ===== CAMBIAR TEMA ===== */

const temaBoton = document.getElementById("tema-boton");

temaBoton.addEventListener("click", function () {

    document.body.classList.toggle("modo-claro");

});


/* ===== CAMBIAR IDIOMA ===== */

const idiomaBoton = document.getElementById("idioma-boton");

let idiomaActual = "es";

idiomaBoton.addEventListener("click", function () {

    if (idiomaActual === "es") {
        idiomaActual = "ca";
    }
    else if (idiomaActual === "ca") {
        idiomaActual = "en";
    }
    else {
        idiomaActual = "es";
    }

    idiomaBoton.textContent = idiomaActual.toUpperCase();

    const textos = document.querySelectorAll("[data-es]");

    textos.forEach(function (texto) {

        texto.textContent = texto.dataset[idiomaActual];

    });

});