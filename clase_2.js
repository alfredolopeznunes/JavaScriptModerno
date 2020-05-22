//clase 2
// Fechas objeto Date

const diaHoy = new Date();
console.log(diaHoy);

//Fecha en especifico Mes, Día y Año
let birthDay = new Date('03-25-1987');
console.log("Naciste el " + birthDay);

let valor;
// Mes
valor = diaHoy.getMonth();
// Día
valor = diaHoy.getDate(); //Día actual del mes
valor = diaHoy.getDay(); // Día de la semana
// Año
valor = diaHoy.getFullYear();
// Minutos
valor = diaHoy.getMinutes();
// Hora
valor = diaHoy.getHours();
// Milisegundos desde 1970
valor = diaHoy.getTime();

//obtener un valor con metodo get
valor = diaHoy.getFullYear();
//setear un valor con metodo set
valor = diaHoy.setFullYear(1987);
valor = diaHoy.getFullYear(); // muestra el valor seteado 


console.log(valor);

//Estructuras de control
let edad = 18;
let mensajeEdad;
const edadRequerida = 18;
function comprobarEdad() { 
    if(edad <= edadRequerida) {
        console.log('Puedes entrar al sitio');
            mensajeEdad = '<strong>si</strong> puedes entrar al sitio';
    } else {
        console.log('No puedes entrar al sitio');
            mensajeEdad = 'no puedes entrar al sitio';
    }        
} ejecutarComprobador(); //nueva función

html = `
              <p>
                 Hola, tu edad es de ${edad} años y ${mensajeEdad}</li>
              </p>
              `;      
document.getElementById('edad').innerHTML = html;

//if, elseif, else

let hora = diaHoy.getHours(); // recordar que se declaro al inicio const diaHoy = new Date();
let minutos = diaHoy.getMinutes();
let horaEs;
if((hora > 0) && (hora <= 12)){
    horaEs = `Son las ${hora}:${minutos}, así que ¡Buenos días!`;
} else if((hora > 12) && (hora <= 18)){
    horaEs = `Son las ${hora}:${minutos}, así que ¡Buenas tardes!`;
} else if((hora > 18) && (hora <= 24)) {
    horaEs = `Son las ${hora}:${minutos}, así que ¡Buenas noches!`;
} else {
    horaEs = `error al leer la hora`;
}
console.log(horaEs);
        
// Ternario
const logueado = true;
console.log( logueado === true ? 'Si se logueo' : 'No se logueo' ); 

// Switch
const metodoPago = 'tarjeta';
switch (metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default:
        console.log(`${metodoPago}, metodo de pago no soportado`);
        break;
}
let mes;
switch (new Date().getMonth()) {
    case 0:
        mes = 'Enero'; 
        break;
    case 1:
        mes = 'Febrero'; 
        break;
    case 2:
        mes = 'Marzo'; 
        break;
    case 3:
        mes = 'Abril'; 
        break;
    case 4:
        mes = 'Mayo'; 
        break;
    case 5:
        mes = 'Junio'; 
        break;
    case 6:
        mes = 'Julio'; 
        break;
    case 7:
        mes = 'Agosto'; 
        break;
    case 8:
        mes = 'Septiembre'; 
        break;
    case 9:
        mes = 'Octubre'; 
        break;
    case 10:
        mes = 'Noviembre'; 
        break;
    case 11:
        mes = 'Diciembre'; 
        break;
}
console.log(`Este mes es ${mes}`);

// For loops
//ejemplo1
for (let index = 0; index < 10; index++) {
    console.log(`Numero: ${index}`);
}
//ejemplo2
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`Numero: ${i}`);
        continue;
    }
    console.log(`${i}`);    
}
//ejemplo3
for(let i = 0; i < 10; i++){
    if(i % 2 == 0) {
        console.log(`El numero ${i} es Par`);
    } else {
        console.log(`Elnumero ${i} es Impar`);
    }
}
//ejemplo4
const arregloProductos = ['Camisa','Boleto','Guitarra','Disco'];
for (let i = 0; i < arregloProductos.length; i++) {
    console.log(`Tu Producto ${arregloProductos[i]} fue agregado`);
}

// While
//Ejemplo1
let i = 0;
while (i < 10) {
    if(i === 5) {
        console.log(`vas por el numero: ${i}`);
        i++;
        continue;
    }
    console.log(`Numero: ${i}`);
    i++;
}
//Ejemplo2
const musicaActual = ['Cancion 1', 'Cancion 2','Cancion 3'];
console.log(musicaActual.length); //Ver cantidad de valores en el array
let index = 0;
while (index < musicaActual.length) {
    console.log(`Reproduciendo la canción: ${musicaActual[index]}`);
    index++;
}

// do While Loop
let indexDo = 11;
do {
    console.log(`Numero: ${indexDo}`);
    indexDo++;
} while (indexDo < 10); // no vuelve a pasar, muestra algo la primera vez sino cumple la condicion

// forEach
 const pendientes = ['Tarea','Comer','Proyecto','Aprender JavaScript'];

 pendientes.forEach(function(pendiente, index) {
     console.log(` ${index} : ${pendiente} `);
 })
 console.log(pendientes);

 // Map para recorrer un arreglo de objetos
const carritoMap = [
    {id: 1, Producto: 'Libro'},
    {id: 2, Producto: 'Camisa'},
    {id: 3, Producto: 'Guitarra'},
    {id: 4, Producto: 'Pendrive'},
];
console.log(carritoMap);

const productoMap = carritoMap.map(function(carritoMap) {
    return console.log(carritoMap.id, carritoMap.Producto);
})
//Ejemplo 2
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
}
console.log(automovil);
for( let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`);
}


//Iteradores en Javascrip

const ciudades = ['londres', 'New york', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'alfredo');
datos.set('profesion', 'desarrollador web');

//Entries Iterador
//Entries a las ciudades
for( let entrada of ciudades.entries() ) {
    console.log(entrada);
}
//Entries a las ordenes
for( let entradaOrdenes of ordenes.entries() ) {
    console.log(entradaOrdenes);
}
//Entries para el Map
 for ( let entradaDatos of datos.entries() ) {
     console.log(entradaDatos);
 }

 //Values Iterador
 //Values a las ciudades
for( let entrada of ciudades.values() ) {
    console.log(entrada);
}
//Values para las ordenes
for( let entradaOrdenes of ordenes.values() ) {
    console.log(entradaOrdenes);
}
//Values para el Map
for ( let entradaDatos of datos.values() ) {
    console.log(entradaDatos);
}

//Keys Iterador
//Keys a las ciudades
for( let entrada of ciudades.keys() ) {
    console.log(entrada);
}
//Keys para las ordenes
for( let entradaOrdenes of ordenes.keys() ) {
    console.log(entradaOrdenes);
}
//Keys para el Map
for ( let entradaDatos of datos.keys() ) {
    console.log(entradaDatos);
}

//Default Iterador
//Default a las ciudades
for( let entrada of ciudades ) {
    console.log(entrada);
}
//Default para las ordenes
for( let entradaOrdenes of ordenes ) {
    console.log(entradaOrdenes);
}
//Default para el Map
for ( let entradaDatos of datos ) {
    console.log(entradaDatos);
}

//Iteradores para string
for (let i = 0; i < mensajeEdad.length; i++) { //forma antigua
    console.log(mensaje[i]);
}
for (let letra of mensaje) { //javascript moderna
    console.log(letra);
}
// Ejemplo 2
const enlaces = document.getElementsByTagName('a');
for(let enlace of enlaces) {
    console.log(enlace.href);
}

// Object windows
let ubicacion;

ubicacion = window.location;
console.log(ubicacion);

// Navigator
 ubicacion2 = window.navigator;
 console.log(ubicacion2);

 // Lenguaje
 ubicacion3 = window.navigator.language;
 console.log(ubicacion3);

 