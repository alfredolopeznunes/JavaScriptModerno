// Event Listener Click

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