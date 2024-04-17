// filters.js

export function inicializarFiltros() {
    const filtroCompletadas = document.getElementsByName('filtro-tareas');

    filtroCompletadas.forEach(filtro => {
        filtro.addEventListener('change', filtrarTareas);
    });
}

export function filtrarTareas() {
    const listaTareas = document.getElementById('lista-tareas');

    if (!listaTareas) {
        console.error('No se encontró la lista de tareas.');
        return;
    }

    const tareas = listaTareas.querySelectorAll('.tarea');

    tareas.forEach(tarea => {
        const completada = tarea.classList.contains('completada');
        let mostrar = false;

        const filtroCompletadas = document.getElementsByName('filtro-tareas');
        filtroCompletadas.forEach(filtro => {
            if (filtro.checked) {
                const tipoFiltro = filtro.value;
                if (tipoFiltro === 'todas' || (tipoFiltro === 'completadas' && completada) ||
                    (tipoFiltro === 'no-completadas' && !completada)) {
                    mostrar = true;
                }
            }
        });

        tarea.style.display = mostrar ? 'block' : 'none';
    });
}
