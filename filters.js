const filtroCompletadas = document.getElementsByName('filtro-tareas');
const listaTareas = document.getElementById('lista-tareas');

filtroCompletadas.forEach(filtro => {
    filtro.addEventListener('change', filtrarTareas);
});

export function filtrarTareas() {
    const tareas = listaTareas.querySelectorAll('.tarea');
    
    tareas.forEach(tarea => {
        const completada = tarea.classList.contains('completada');
        let mostrar = false;

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
