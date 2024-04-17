// addNotes.js

export function inicializarNotas() {
    const inputNotas = document.getElementById('ing-notas');

    inputNotas.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarNotas();
        }
    });
}

export function agregarNotas() {
    const inputNotas = document.getElementById('ing-notas');
    const listaNotas = document.querySelector('.notas1 ul');

    // Verificar si el input de notas y la lista de notas existen
    if (inputNotas && listaNotas) {
        // Obtener las notas ingresadas por el usuario
        const notas = inputNotas.value.trim();

        // Agregar las nuevas notas al contenedor de notas
        if (notas !== '') {
            // Crear un nuevo elemento de lista para las notas
            const notasElemento = document.createElement('li');
            notasElemento.textContent = notas;

            // Agregar las nuevas notas a la lista de notas en la sección de notas
            listaNotas.appendChild(notasElemento);

            // Limpiar el input de notas después de agregarlas
            inputNotas.value = '';
        } else {
            alert('Por favor ingresa notas válidas.');
        }
    } else {
        console.error('No se encontraron el input de notas o la lista de notas.');
    }
}
