// Event Listener Click 54

// Buscador
// opcion 1
document.querySelector('#submit-buscador').addEventListener('click', function(e){
    e.preventDefault();
    alert('Click al buscador');
});

// opcion 2
document.querySelector('#submit-buscador').addEventListener('click', ejecutaBoton);

function ejecutaBoton(ev) {
    ev.preventDefault();
    console.log('Desde la función ejecutar Boton');

    let evElemento;
    evElemento = ev;
    evElemento = ev.target;
    evElemento = ev.target.id;
    evElemento = ev.target.className;
    // evElemento = ev.target.innerText;

    console.log(evElemento);
};

document.querySelector('#encabezado-reemplazado-js').addEventListener('click', function(e){
    e.target.innerText = "Nuevo encabezado con Event Listener";
});

(function() {
    var carA = new Object({color: "blue"});
    var carB = new Object({color: "blue"});

    console.log(carA == carB);
    console.log(carA === carB);
})()

// Otros eventos con el mouse 55
// Variables

let encabezadoEvento = document.querySelector('#hero');
let enlacesEvento = document.querySelector('.enlace');
let botonEvento = document.querySelector('#vaciar-carrito');

// Click -> al hacer click
//botonEvento.addEventListener('click', obtenerEvento);
// Doble Click -> al hacer doble click
//botonEvento.addEventListener('dblclick', obtenerEvento);
// Mouse Enter -> al pasar el mouse sobre el elemento
//botonEvento.addEventListener('mouseenter', obtenerEvento);
// Mouse Leave -> al quitar el mouse del el elemento
//botonEvento.addEventListener('mouseleave', obtenerEvento);
// Mouse Over -> Al pasar el mouse sobre el elemento
//botonEvento.addEventListener('mouseover', obtenerEvento);
// Mouse Out -> al quitar el mouse del el elemento
//botonEvento.addEventListener('mouseout', obtenerEvento);
// Mouse Down -> al hace click sobre el elemento
//botonEvento.addEventListener('mousedown', obtenerEvento);
// Mouse Up -> al soltar click sobre el elemento
botonEvento.addEventListener('mouseup', obtenerEvento);

// al desplazar el mouse sobre el elemento, se ejecuta por cada movimiento
//encabezadoEvento.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${e.type}`);
}

//Eventos para los inputs 56
let busqueda = document.querySelector('#buscador');

//busqueda.addEventListener('keydown', eventoInput);
busqueda.addEventListener('keyup', eventoInput);
//busqueda.addEventListener('keypress', eventoInput);
//busqueda.addEventListener('focus', eventoInput);
//busqueda.addEventListener('blur', eventoInput);
//busqueda.addEventListener('cut', eventoInput);
//busqueda.addEventListener('copy', eventoInput);
//busqueda.addEventListener('paste', eventoInput);
//busqueda.addEventListener('change', eventoInput);
busqueda.addEventListener('input', eventoInput);

function eventoInput(e) {
    //console.log(busqueda.value);
    document.querySelector('.contenido-hero h2').innerText = busqueda.value;
    console.log(`EVENTO: ${e.type}`);
}

// Event Bubbling 57
let cardBubbling = document.querySelector('.card');
let infocardBubbling = document.querySelector('.info-card');
//let carritoBubbling = document.querySelector('.agregar-carrito');

cardBubbling.addEventListener('click', function(e) {
    console.log('stopPropagation: Click en card');
    e.stopPropagation();
});
infocardBubbling.addEventListener('click', function(e) {
    console.log('stopPropagation: Click en Info curso');
    e.stopPropagation();
});
// carritoBubbling.addEventListener('click', function(e) {
//     console.log('stopPropagation: Click en agregar al carrito');
//     e.stopPropagation();
// });

// Delegation en JavaScript 58

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();
    /*console.log('Click!');
    console.log(e.target.classList);*/

    // if(e.target.classList.contains('borrar-curso')) {
    //     confirm('¿Quieres borrar el curso?');
    //     console.log('esto contiene .borrar-curso');
    // } else {
    //     console.log('esto no contiene .borrar-curso');
    // }
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }
}

// Sección 5 Local Storage en JavaScript
// session Storage & sessionStorage
sessionStorage.setItem('developer', '@Alfr3d07Dev');
// agregando, leyemdo, borrando y limpiando el LocalStorage 59
// add
localStorage.setItem('developer', '@Alfr3d07Dev');
// Get
let datos = localStorage.getItem('developer');

console.log('localStorage: ' + datos);
// Delete
//localStorage.removeItem('developer', '@Alfr3d07Dev');
// Clear Storage
//localStorage.clear();

