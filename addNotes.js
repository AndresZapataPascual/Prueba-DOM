// Obtener el input de notas, el contenedor de notas y la lista de tareas
const inputNotas = document.getElementById('ing-notas');
const contenedorNotas = document.getElementById('contenedor-notas');
const listaTareas = document.getElementById('lista-tareas');

// Función para agregar notas a una tarea seleccionada
export function agregarNotas() {
   
        // Obtener las notas ingresadas por el usuario
        const notas = inputNotas.value.trim();

        // Agregar las nuevas notas al contenedor de notas al lado de la tarea seleccionada
        if (notas !== '') {
            // Crear un nuevo elemento de lista para las notas
            const notasElemento = document.createElement('li');
            notasElemento.textContent = notas;
            
            // Agregar las nuevas notas a la lista de tareas en la sección de notas
            const listaNotas = document.querySelector('.notas1 ul');
            listaNotas.appendChild(notasElemento);

            // Limpiar el input de notas después de agregarlas
            inputNotas.value = '';
        } else {
            alert('Por favor ingresa notas válidas.');
        }
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


