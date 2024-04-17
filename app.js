// app.js

// Crear el encabezado
const header = document.createElement('header');
const titulo = document.createElement('h1');
titulo.textContent = 'GESTOR DE TAREAS';
header.appendChild(titulo);
document.body.appendChild(header);

// Crear el contenedor principal
const main = document.createElement('main');
main.classList.add('container');

// Crear la sección de agregar
const sectionAgregar = document.createElement('section');
sectionAgregar.classList.add('add');

const division = document.createElement('section');
division.classList.add('division');

const sectionAgregarTarea = document.createElement('section');
sectionAgregarTarea.classList.add('añadir');
const tituloAgregarTarea = document.createElement('h2');
tituloAgregarTarea.textContent = 'Agregar Tarea';
const inputTarea = document.createElement('input');
inputTarea.setAttribute('type', 'text');
inputTarea.setAttribute('id', 'ing-tarea');
inputTarea.setAttribute('placeholder', 'Ingrese una nueva tarea');
const botonAgregarTarea = document.createElement('button');
botonAgregarTarea.setAttribute('id', 'add-tarea');
botonAgregarTarea.textContent = 'Agregar Tarea';
sectionAgregarTarea.appendChild(tituloAgregarTarea);
sectionAgregarTarea.appendChild(inputTarea);
sectionAgregarTarea.appendChild(botonAgregarTarea);

const sectionNotas = document.createElement('section');
sectionNotas.classList.add('notas');
const tituloNotas = document.createElement('h2');
tituloNotas.textContent = 'Notas';
const inputNotas = document.createElement('input');
inputNotas.setAttribute('type', 'text');
inputNotas.setAttribute('id', 'ing-notas');
inputNotas.setAttribute('placeholder', 'Ingrese notas sobre los pendientes');
sectionNotas.appendChild(tituloNotas);
sectionNotas.appendChild(inputNotas);

division.appendChild(sectionAgregarTarea);
division.appendChild(sectionNotas);

const sectionFiltros = document.createElement('section');
sectionFiltros.classList.add('filtros');
const tituloFiltros = document.createElement('h2');
tituloFiltros.textContent = 'Filtros';
const labelCompletadas = document.createElement('label');
labelCompletadas.setAttribute('for', 'filtro-completadas');
labelCompletadas.textContent = 'Completadas';
const inputCompletadas = document.createElement('input');
inputCompletadas.setAttribute('type', 'radio');
inputCompletadas.setAttribute('name', 'filtro-tareas');
inputCompletadas.setAttribute('id', 'filtro-completadas');
inputCompletadas.setAttribute('value', 'completadas');
const labelNoCompletadas = document.createElement('label');
labelNoCompletadas.setAttribute('for', 'filtro-no-completadas');
labelNoCompletadas.textContent = 'No Completadas';
const inputNoCompletadas = document.createElement('input');
inputNoCompletadas.setAttribute('type', 'radio');
inputNoCompletadas.setAttribute('name', 'filtro-tareas');
inputNoCompletadas.setAttribute('id', 'filtro-no-completadas');
inputNoCompletadas.setAttribute('value', 'no-completadas');
const labelTodas = document.createElement('label');
labelTodas.setAttribute('for', 'filtro-todas');
labelTodas.textContent = 'Mostrar Todas';
const inputTodas = document.createElement('input');
inputTodas.setAttribute('type', 'radio');
inputTodas.setAttribute('name', 'filtro-tareas');
inputTodas.setAttribute('id', 'filtro-todas');
inputTodas.setAttribute('value', 'todas');
inputTodas.setAttribute('checked', 'true');
sectionFiltros.appendChild(tituloFiltros);
sectionFiltros.appendChild(labelCompletadas);
sectionFiltros.appendChild(inputCompletadas);
sectionFiltros.appendChild(labelNoCompletadas);
sectionFiltros.appendChild(inputNoCompletadas);
sectionFiltros.appendChild(labelTodas);
sectionFiltros.appendChild(inputTodas);

sectionAgregar.appendChild(division);
sectionAgregar.appendChild(sectionFiltros);

// Crear la sección de visualización
const sectionVisual = document.createElement('section');
sectionVisual.classList.add('visual');

const sectionLista = document.createElement('section');
sectionLista.classList.add('lista');
const tituloLista = document.createElement('h2');
tituloLista.textContent = 'Lista de Tareas';
const ulLista = document.createElement('ul');
ulLista.setAttribute('id', 'lista-tareas');
sectionLista.appendChild(tituloLista);
sectionLista.appendChild(ulLista);

const divContenedorNotas = document.createElement('div');
divContenedorNotas.setAttribute('id', 'contenedor-notas');
divContenedorNotas.style.display = 'none';

sectionLista.appendChild(divContenedorNotas);

const sectionNotas1 = document.createElement('section');
sectionNotas1.classList.add('notas1');
const tituloNotas1 = document.createElement('h2');
tituloNotas1.textContent = 'Notas';
const ulNotas1 = document.createElement('ul');
sectionNotas1.appendChild(tituloNotas1);
sectionNotas1.appendChild(ulNotas1);

sectionVisual.appendChild(sectionLista);
sectionVisual.appendChild(sectionNotas1);

main.appendChild(sectionAgregar);
main.appendChild(sectionVisual);

document.body.appendChild(main);

import { agregarTarea, inicializarTareas } from './addTask.js';
import { filtrarTareas, inicializarFiltros } from './filters.js';
import { agregarNotas, inicializarNotas } from './addNotes.js';

agregarTarea();
inicializarTareas();
inicializarNotas();
filtrarTareas();
agregarNotas();
inicializarFiltros();
filtrarTareas();