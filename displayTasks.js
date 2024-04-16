// JavaScript (nuevoArchivo.js)
// Obtener el input de notas, el contenedor de notas y la lista de tareas
const inputNotas = document.getElementById('ing-notas');
const contenedorNotas = document.getElementById('contenedor-notas');
const listaTareas = document.getElementById('lista-tareas');

// Función para agregar notas a una tarea seleccionada
export function agregarNotas() {
    // Obtener la tarea seleccionada
    const tareaSeleccionada = listaTareas.querySelector('.seleccionada');

    if (tareaSeleccionada) {
        // Obtener las notas ingresadas por el usuario
        const notas = inputNotas.value.trim();

        // Agregar las nuevas notas al contenedor de notas al lado de la tarea seleccionada
        if (notas !== '') {
            const notasElemento = document.createElement('p');
            notasElemento.textContent = notas;
            contenedorNotas.appendChild(notasElemento);

            // Mostrar el contenedor de notas si no está visible
            contenedorNotas.style.display = 'block';

            // Limpiar el input de notas después de agregarlas
            inputNotas.value = '';
        } else {
            alert('Por favor ingresa notas válidas.');
        }
    } else {
        alert('Por favor selecciona una tarea antes de agregar notas.');
    }
}

// Función para mostrar u ocultar el input de notas según si hay una tarea seleccionada
function mostrarInputNotas() {
    const tareaSeleccionada = listaTareas.querySelector('.seleccionada');
    inputNotas.style.display = tareaSeleccionada ? 'block' : 'none';
}

// Escuchar eventos de click en la lista de tareas para seleccionar una tarea
listaTareas.addEventListener('click', function(event) {
    const tareaSeleccionada = event.target.closest('.tarea');
    
    // Desmarcar todas las tareas
    listaTareas.querySelectorAll('.tarea').forEach(tarea => {
        tarea.classList.remove('seleccionada');
    });

    // Marcar la tarea seleccionada
    if (tareaSeleccionada) {
        tareaSeleccionada.classList.add('seleccionada');
    }

    // Limpiar el contenido del input de notas al seleccionar una nueva tarea
    inputNotas.value = '';

    // Mostrar u ocultar el input de notas según si hay una tarea seleccionada
    mostrarInputNotas();
});

// Escuchar eventos de tecla presionada en el input de notas
inputNotas.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarNotas();
    }
});

// Ocultar el input de notas inicialmente
inputNotas.style.display = 'none';
