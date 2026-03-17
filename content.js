const materiasAOcultar = [
	"Materia1",
    "Materia2",
    "Materia3",
    "Materia4",
    "Materia5"
];

function limpiarCampusDropdown() {
	//contenedores del dropdown
    const tarjetasDropdown = document.getElementById('dropdownmain-navigation0');
    if (!tarjetasDropdown) return;

    const cursoItems = tarjetasDropdown.querySelectorAll('li > a'); 
	
    cursoItems.forEach(item => {
        const cursoNombre = item.textContent.trim().toLowerCase();
		//checkear si los items estan en la lista
        const debeOcultarse = materiasAOcultar.some(hideTarget => cursoNombre.includes(hideTarget));
        
		// ocultar el padre tambien
        if (debeOcultarse) {
            item.parentElement.style.display = 'none'; 
        }
    });
}

function limpiarCampus() {
    // contenedores de las tarjetas
    const tarjetas = document.querySelectorAll('.coursebox.hover.covtiles');

    tarjetas.forEach(tarjeta => {

        const textoTarjeta = tarjeta.innerText;
        // verificar texto de las tarjetas
        const debeOcultarse = materiasAOcultar.some(nombre => 
            textoTarjeta.toLowerCase().includes(nombre.toLowerCase())
        );
        // ocultar tarjeta
        if (debeOcultarse) {
            tarjeta.style.display = 'none';
        }
    });
}


limpiarCampus();
limpiarCampusDropdown();

const observer = new MutationObserver(() => {
    limpiarCampus();
	limpiarCampusDropdown();
});

observer.observe(document.body, { childList: true, subtree: true });