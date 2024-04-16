const filtroCompletadas = document.getElementById('filtro-completadas');
const filtroNoCompletadas = document.getElementById('filtro-no-completadas');
const listaTareas = document.getElementById('lista-tareas');

filtroCompletadas.addEventListener('change', filtrarTareas);
filtroNoCompletadas.addEventListener('change', filtrarTareas);

export function filtrarTareas() {
    const tareas = listaTareas.querySelectorAll('.tarea');
    const mostrarCompletadas = filtroCompletadas.checked;
    const mostrarNoCompletadas = filtroNoCompletadas.checked;

    tareas.forEach(tarea => {
        const completada = tarea.classList.contains('completada');
        if ((mostrarCompletadas && completada) || (mostrarNoCompletadas && !completada)) {
            tarea.style.display = 'block';
        } else {
            tarea.style.display = 'none';
        }
    });
}
