const listaTareas = document.getElementById('lista-tareas');
const tareaElemento = document.getElementById('tarea');

export function agregarApunte() {

    let Nuevoapunte = document.createElement('section');
        Nuevoapunte.classList.add('Apunte');
}
tareaElemento.addEventListener('click', agregarApunte);