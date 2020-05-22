//clase 1
// let nombre = prompt('¿Cuál es tu nombre?');
// let edad = prompt('¿Cuál es tu edad?');

// document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;

// var let const
function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // misma variable! setea el valor 31 de x
      console.log(Number(x) + ' Dentro del bloque IF');  // 71
    }
    console.log(x + ' Fuera del bloque IF, variable global');  // 71
} varTest()
   
function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente
      console.log(x + ' Dentro del bloque IF');  // 71
    }
    console.log(x + ' Fuera del bloque IF, variable global');  // 31
} letTest()

var a = 5;
var b = 10;
 
if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es dentro de la función
 
  console.log(a);  // 4
  console.log(b);  // 1
}
 
console.log(a); // 5
console.log(b); // 1
  
let primerNombre, primerMensaje;

primerNombre = 'Alfredo'; // camelcase
mensaje = ' \"Todo el ánimo!!\" ';

console.log(primerNombre,mensaje);

let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

console.log(aprendiendo+ ' ' +tecnologia);
console.log(`${aprendiendo} ${tecnologia}`);

var mensaje2 = 'Aprendiendo JavaScript y algunos Framework';

//algunos metodos para cadenas de texto
console.log(mensaje.length); //ancho
console.log(mensaje2.indexOf('Framework')); //En que posicion esta la palabra
console.log(mensaje2.slice(0,15)); //corta la cadena
console.log(mensaje2.split(' ')); //separa
console.log(mensaje2.replace('Framework', 'Framework más populares')); //remplaza
console.log(mensaje2.includes('Framework')); //retorna verdadero o falso
console.log(primerNombre.repeat(5)); //repite

//Números
const numero1 = 10,
      numero2 = 20,
      numero3 = 30,
      numero4 = '20';

let resultado;
 resultado = numero1 + numero2; //Suma
 resultado = numero1 - numero2; //Resta
 resultado = numero1 * 4; //Multiplicación
 resultado = numero1 / 4; //División
 resultado = Math.PI;
 resultado = Math.abs(numero3);
 resultado = Math.min(3,4,5,6,7,8);
 resultado = Math.max(3,4,5,6,7,8);
 resultado = Math.random(1,2,3,4,5,6);
 resultado = (10 + 10 + 20 + 20 + 40) * .20;

 console.log(resultado); 
 // symbol
 valor = Symbol('Simbolo');
 // arreglo
 valor = [1,2,3,4];
 // objetos
 valor = {
     nombre: 'Alfredo',
     profesion: 'Desarrollador frontend'
 }
 // fecha
 valor = new Date();
 console.log(typeof valor);

 //Operadores de comparación
 console.log('*********************Operadores de comparación*********************');
 console.log(numero1 > numero2);
 console.log(numero2 == numero4);
 console.log(numero2 === numero4);
console.log (typeof numero4);

var numero5 = 99878.2646465;
console.log(parseFloat(numero5).toFixed(3));

//Template Literals o String Template

const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2= 40;

let html;
//forma antigua
// html = '<ul>' +
//        '<li>Orden: ' + producto1 + '</li>' +
//        '<li>Precio: ' + precio1 + '</li>' +
//        '<li>Orden: ' + producto2 + '</li>' +
//        '<li>Precio: ' + precio2 + '</li>' +
//        '<li>Total: ' + (precio1 + precio2) + '</li>' +
//        '</ul>';
//        document.getElementById('app').innerHTML = html;
 
       html = `
              <ul>
                 <li>Orden: ${producto1}</li>
                 <li>Precio: ${precio1}</li>
                 <li>Orden: ${producto2}</li>
                 <li>Precio: ${precio2}</li>
                 <li>Total: ${precio1+precio2}</li>
                 <li>Total: ${total(precio1, precio2)}</li>
              </ul>
              `;
        function total(precio1, precio2) {
            return precio1 + precio2;
        }      
        document.getElementById('app').innerHTML = html;   
        
// Arreglos

const numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros);
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

//añadir al arreglo
meses[4] = 'Mayo';
meses.push('Junio');
meses.unshift('Mes 0');

// Eliminar de un arreglo
meses.pop(); //ultimo
meses.shift(); //primero

// Quitar un rango
meses.splice(2,1);

// Revertir
meses.reverse();

//imprimir
console.log(meses);
// concatenar arreglos
console.log(numeros.concat(meses));

//ordenar un arreglo
const frutas = new Array('Platano', 'Manzana', 'Fresa', 'Naranja');
frutas.sort();
console.log(frutas);

//ordenar un arreglo
let numerosX = new Array(8,5,12,0,21,3,88,7);

numerosX.sort(function(x, y) {
    return x - y;
})

console.log(numerosX);

// Crear Objetos

const persona = {
    nombre: 'Alfredo',
    apellido: 'López',
    profesion: 'Desarrollador',
    email: 'alfredolopeznunes@gmail.com',
    edad: 33,
    musica: ['Rock', 'Metal', 'Trance'],
    paises_visitados: {
        pais: ['Venezuela','Chile']
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}
console.log(persona.paises_visitados.pais[0]);
console.log(persona['paises_visitados']['pais'][0]);
console.log(persona.nacimiento());

// Arreglos de Objetos
const autos = [
    {modelo: 'Mustang', motor: 6.2},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Ford', motor: 6.3},
];
for(let i = 0; i < autos.length; i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
    console.log(autos[i]);
}
console.log(autos.length);

// Funciones
// function saludar(nombre) {
//     if(typeof nombre ==='undefined') {nombre = 'Visitante'}
//     return `Hola ${nombre}`;
// }
function saludar(nombre = 'Visitante') {
    return `Hola ${nombre}`;
}
let saludo;
saludo = saludar();
console.log(saludo);

const saludar2 = function(nombre = 'Visitante', edad = 30, trabajo = 'desarrollo web') {
    return `Hola, tienes ${edad}, profesión ${trabajo} y te llamas ${nombre}`;
}
console.log( saludar2('Alfredo') ); 

// Funciones IIFE
(function(nombre = 'Visitante desde funcion IIFE') {
    console.log(`hola ${nombre}`);
})('Alfredo desde funcion IIFE');

// Métodos de propiedad
// Cuando una función se coloca dentro de un objeto

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id: ${id}`);
    }(30), //se esta ejecutando aqui 
    pausar: function() {
        console.log(`Pause a la música`);
    }
}

musica.borrar = function(id) {
    console.log(`Borrando la canción con el id: ${id}`);
}

// musica.reproducir(30);
musica.pausar();
musica.borrar(2);

// Función Try catch
// funciones que no existen

try {
    ejecutaNada(); // esta entra por el catch y tira error
    obtenerClientes(); // ejecuta obtenerClientes()
} catch (error) {
    console.log(error);
} finally{
    console.log('finally siempre se ejecutar sin importar resultados');
}
obtenerClientes();
function obtenerClientes() {
    console.log('Ejecutando obtenerClientes()');

    // setTimeout(function() {
    //     console.log('Finalizado obtenerClientes()')
    // }, 3000);
}

function hola() {
    let Precio_3 = 12.25;
    return console.log(Math.round(parseInt(Precio_3)));
} hola()