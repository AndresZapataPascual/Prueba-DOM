const input = document.getElementById('ing-tarea');
const input2 = document.getElementById('txt-nota');
const listaTareas = document.getElementById('lista-tareas');
const tareaElemento = document.getElementById('tarea');
const Notas = document.getElementById('notas');

export function agregarApunte() {
    const tareas = listaTareas.querySelectorAll('.tarea');

    //creamos las notas para la tarea
    let Nuevoapunte = document.createElement('section');
        Nuevoapunte.classList.add('Apunte');

    let texto = document.createElement('h1');
        texto.innerText = input.value;
        Nuevoapunte.appendChild(texto);

    let apunte = document.createElement('section');
        tareaNueva.classList.add('tarea');

        Notas.forEach(Apunte => {
            const tareas = listaTareas.querySelector('.tarea');
            if (listaTareas.querySelector('tarea')) {
                tarea.style.display = 'block';
            } else {
                tarea.style.display = 'none';
            }
        });
}
tareaElemento.addEventListener('click', agregarApunte); 