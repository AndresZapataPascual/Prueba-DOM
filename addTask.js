// addTask.js

export function inicializarTareas() {
    const botonAgregarTarea = document.getElementById('add-tarea');
    const inputTarea = document.getElementById('ing-tarea');

    botonAgregarTarea.addEventListener('click', agregarTarea);
    inputTarea.addEventListener('keypress', handleEnter);
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
}

export function agregarTarea() {
    const input = document.getElementById('ing-tarea');
    const ListaDeTareas = document.getElementById('lista-tareas');

    if (input.value) {
        //crear tarea
        let tareaNueva = document.createElement('section');
        tareaNueva.classList.add('tarea');

        //Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //contenedores de los iconos
        let iconos = document.createElement('section');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar)

        //Agregar Tarea a la lista
        ListaDeTareas.appendChild(tareaNueva);

        // Limpiar el input de tarea después de agregarla
        input.value = '';
    } else {
        alert('Por favor ingresa una tarea.');
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

