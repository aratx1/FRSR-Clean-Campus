
const materiasAOcultar = [
    "Materia1",
    "Materia2",
    "Materia3",
    "Materia4",
    "Materia5"

];

function limpiarCampus() {
    // contenedores
    const tarjetas = document.querySelectorAll('.coursebox.hover.covtiles');

    tarjetas.forEach(tarjeta => {

        const textoTarjeta = tarjeta.innerText;

        const debeOcultarse = materiasAOcultar.some(nombre => 
            textoTarjeta.toLowerCase().includes(nombre.toLowerCase())
        );

        if (debeOcultarse) {
            tarjeta.style.display = 'none';
        }
    });
}

limpiarCampus();

const observer = new MutationObserver(limpiarCampus);
observer.observe(document.body, { childList: true, subtree: true });