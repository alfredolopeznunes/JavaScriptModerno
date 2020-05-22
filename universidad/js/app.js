//getElementById

let encabezado;

encabezado = document.getElementById('encabezado');

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';

// Cambiar el texto
encabezado.innerText = 'Los mejores Cursos';

console.log(encabezado.innerText);


// Query Selector

const encabezado2 = document.querySelector('#encabezado');
// Aplicar ccs
encabezado2.style.padding = '40px';

// Ejemplo2
let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
enlace = document.querySelector('#principal a:last-child');


console.log(enlace);


// Query Selector All

const enlaces1 = document.getElementsByClassName('enlace');
console.log(enlaces1);
const enlaces2 = document.querySelector('.enlace');
console.log('querySelector: ' + enlaces2);
const enlaces3 = document.querySelectorAll('.enlace');
console.log('querySelectorAll: ' + enlaces3);

let enlaces4 = document.getElementsByClassName('enlace')[3];
console.log(enlaces4);

const links = document.getElementsByTagName('a');
let enlacesLinks = Array.from(links);
console.log(enlacesLinks);
enlacesLinks.forEach(function(enlacefor){
    console.log(enlacefor.textContent);
});

const enlacesAll = document.querySelectorAll('#principal a:nth-child(odd)');
enlacesAll.forEach(function(impares) {
    impares.style.backgroundColor = 'blue';
    impares.style.color = '#fff';
})

//Traversing
// Tipos de nodos => etiquetas html
/*
1 = Elementos
2 = Atributos
3 = Text Node
8 = comentarios
9 = documentos
10 = doctype
*/
const navegacion = document.querySelector('#principal');

console.log(navegacion.nodeName);
console.log(navegacion.nodeType);
console.log(navegacion.nodeValue);

//father to children
console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[0].children);
console.log(navegacion.children[0].textContent = 'Nuevo enlace');

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);

const huincha = document.querySelectorAll('.barra');
console.log(huincha[0].children[0].children[0].children[0].children[0].textContent = 'Modificado desde Traversing father to child');

//children to father
let enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[1]);
console.log(enlaces[1].parentNode);
console.log(enlaces[1].parentElement);
console.log(enlaces[1].parentElement.parentElement);

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Título desde Traversing child to father');

//Primos, elementos anteriores o siguientes
console.log(enlaces[4].previousElementSibling.previousElementSibling);
console.log(enlaces[1].nextElementSibling.nextElementSibling);


// Crear elementos en el DOM
// Crear enlaces

const enlaceCreate = document.createElement('a');
// Agregamos una clase
enlaceCreate.className = 'enlace';
// Añadimos un id
enlaceCreate.id = 'nuevo-id';
//añadimos name
enlaceCreate.setAttribute('name', 'nuevo-name');
// atributo de href y target
enlaceCreate.setAttribute('href', '#');
enlaceCreate.target = '_blanck';
// añadir un texto
enlaceCreate.textContent = 'texto 1 ';
enlaceCreate.appendChild(document.createTextNode('texto 2'));

// Agregarlo al HTML
document.querySelector('#secundaria').appendChild(enlaceCreate);

console.log(enlaceCreate);

// Reemplazando elementos Ejercicio 1
// Crear un elemento
const nuevoEncabezado = document.createElement('h2');
// agregar un id
nuevoEncabezado.id = 'encabezado-reemplazado-js';
// agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos editado por JS'));
// Elemento anterior que será reemplazado
const anterior = document.querySelector('#encabezado');
// Elemento Padre
const elPadre = document.querySelector('#lista-cursos');
// Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior.parentElement);


// Modificar H2 del banner
// Capturar elemento a modificar
const tituloH2 = document.querySelector('.contenido-hero h2');
// texto nuevo
tituloH2.textContent = 'Título del banner modificado con JS';
console.log(tituloH2);

// Agregando y quitando clases y otros atributos
const enlaceRemove = document.querySelectorAll('.enlace');
const navegacionSecundaria = document.querySelector('#secundaria');
console.log(enlaceRemove);
enlaceRemove[6].remove();
navegacionSecundaria.removeChild(enlaceRemove[7]);
console.log(navegacionSecundaria);

// Ejemplo 2
const primerLi = document.querySelector('.enlace');

let elementoLi;
// obtener una clase de css
elementoLi = primerLi.className;
elementoLi = primerLi.classList.add('nueva-clase');
elementoLi = primerLi.classList.add('nueva-clase2');
setTimeout(() => {
    elementoLi = primerLi.classList.remove('nueva-clase2');
}, 4000);
elementoLi = primerLi.classList;

// Leer atributos
elementoLi = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'https://google.com');
elementoLi = primerLi;
elementoLi.setAttribute('data-id', 20);
elementoLi.setAttribute('data-name', 'hola');
elementoLi = primerLi.hasAttribute('data-name');
primerLi.removeAttribute('data-name');
elementoLi = primerLi;
console.log(elementoLi);