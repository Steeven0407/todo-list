const input = document.getElementById("inputTarea");
const div = document.getElementById('listaDeTareas');
const botonAgregar = document.getElementById('botonAgregar');

botonAgregar.addEventListener('click', () => {
    const tarea = document.createElement('div');
    tarea.classList.add('textareaDiv');

    const textarea = document.createElement('textarea');
    if (input.value === '') {
        alert('No se puede agregar una tarea vacía');
        return;
    }

    textarea.value = input.value;
    textarea.classList.add('textoTarea');

    

    const spanEliminar = document.createElement('i');
    
    spanEliminar.classList.add('trash');
    spanEliminar.classList.add('fas');
    spanEliminar.classList.add('fa-trash');

    //spanEliminar.textContent = 'Eliminar';
    
    spanEliminar.addEventListener('click',()=> eliminarElemento(tarea));

    const spanEditar = document.createElement('i');
    spanEditar.classList.add('save');
    spanEditar.classList.add('fas');
    spanEditar.classList.add('fa-save');
    //spanEditar.textContent = 'Editar';

    spanEditar.addEventListener('click', ()=>editarElemento(textarea));

    tarea.appendChild(spanEliminar);
    tarea.appendChild(spanEditar);
    tarea.appendChild(textarea);
    input.value = '';
    div.appendChild(tarea);

});


function eliminarElemento(tarea){
    if (tarea.parentElement === div) {
        div.removeChild(tarea);
    } else {
        console.error('El elemento no es un hijo de la lista de tareas');
    }}

function editarElemento(textarea){
    const nuevoTexto = prompt('Escribe el nuevo texto de la tarea');
    if (nuevoTexto !== null) {
        textarea.value = nuevoTexto;
    }
}