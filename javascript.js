// alert('funcionando');

var numero = 2020;
var numero2 = 20;
var texto = '40';

//alert(numero);
//alert(numero + numero2);
//alert(numero + texto);
//numero = 2030;

//alert(numero);

const num = 1800;
var num2 = num + 1;
//num2++;
num2--;
console.log(num2);

var nombre = 'Elizabeth';

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONDICIONAL:
if(num>1700 || nombre == 'Carolina'){
    console.log('Verdadero');
}else{
    console.log('Falso');
}

var verdadero = true;
if(!verdadero){
    console.log('Esto es verdadero.');
}else{
    console.log('Esto es falso.');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARRAYS:
var arreglo = [1, 2, 3, 'Carolina', true];

console.log(arreglo);
console.log(arreglo[3]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//FOR:
for(var i=0;i<5;i++){
    console.log(arreglo[i]);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//WHILE:
var i=0;
while(i<5){
    console.log(i);
    i++;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// DO WHILE:
var i=6;
do{
    console.log(i);
    i++;
}while(i<5);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//SWITCH:

var hora = 15;

switch(hora){
    case 10:
        console.log("Buen día!");
        break;
    case 15:
        console.log("Buenas tardes!");
        break;    
    default:
        console.log("No tengo saludo a esa hora.");
        break;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCIONES:

var numerito1 = 5;
var numerito2 = 5;

function sumaUno(){
    console.log(numerito1 + numerito2);
}
sumaUno();

function sumaDos(n1, n2){
    console.log(n1+n2);
}
sumaDos(10,10);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCIONES DE FLECHA:

const additionOne = () => {
    console.log(30);
}
additionOne();

const additionTwo = num => {//si solo hay un parámetro, no hace falta colocar los paréntesis
    console.log(num);
}
additionTwo(40);

//con return:
// const additionThree = (number1, number2) => {
//     return (number1 + number2);
// }

//abreviada:
const additionThree = (number1, number2) => (number1 + number2)

const answer = additionThree(25,25);
console.log(answer);

//si no recibe parámetros, tengo que escribir los paréntesis:
const mensaje = () => {
    return 'Hola, soy Carolina'
}
const miNombre = mensaje()
console.log(miNombre)

//Si solo recibe un parámetro, no necesito los paréntesis:
// const mensajeDos = nombre => {
//     return 'Hola, soy ' + nombre
// }

//abreviada:
const mensajeDos = nombre => 'Hola, soy ' + nombre

const myName = mensaje('Carolina')
console.log(myName)

const additionFour = (num) => {
    console.log(num + 30)
}
additionFour(30)

//que pasa si el usuario no envía nada
//le asigno un valor a num, en caso que no reciba ningún parámetro
const additionFive = (num=40) => {
    console.log(num + 30)
}
additionFive()

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TEMPLATE LITERALS (Template strings):
//${} permite inyectar lógica de Javascript
// const sumaNumeros = (numUno, numDos) => {
//     return `El número es: ${numUno + numDos}`
// }
// const respuesta = sumaNumeros(40,40)
// console.log(respuesta)

//versión abreviada:
const sumaNumeros = (numUno, numDos) => (`El número es: ${numUno + numDos}`)//Los paréntesis después de la flecha también se pueden omitir...

const respuesta = sumaNumeros(40,40)
console.log(respuesta)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//DIFERENCIAS ENTRE var, let y const:

//var edad = 55;
//var edad = 60;//debilidad de var: estoy reescribiendo una variable
//console.log(edad);

let edad = 55;
//let edad = 60;//con let esto no pasa: tira error si declaro la misma variable de nuevo

edad = 100;//no hay problema con cambiarle el valor
console.log(edad);

for(var i=80;i<85;i++){
    console.log(i);
}
console.log(i);//var i sigue viva fuera del ciclo for

let j=34;//defino j fuera del ciclo for, en el ambiente/scope global
for(let j=80;j<85;j++){//j definida dentro del ambiente/scope del ciclo for
    console.log(j);
}
//console.log(j);//let j no se encuentra definida fuera del ciclo for
console.log(j);

//En resumen, var existe en cualquier ambiente, pero let no.

var numero4;
let numero5;
//const numero6; //tira error porque las constantes se declaran y se inicializan al mismo tiempo. No puedo solo declarar const, tengo que asignarle un valor.

console.log(numero4);
console.log(numero5);

const numero6 = 90;
console.log(numero6);

//las constantes no se pueden redeclarar ni se le puede asignar otro valor:
//const numero6 = 78;//esto tira error
//numero6 = 78;//esto tira error
//const es un valor CONSTANTE

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION PUSH:
const numeros = [12,13,14,15];
//numeros = [30];//esto tira error
numeros.push(16);
console.log(numeros);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//OBJETOS:
const persona = {
    nombre: 'Juan',
    edad: 32
};
persona.edad = 33;
console.log(persona.edad);
persona.pais = "Argentina";
console.log(persona);

const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['persa', 'siames', 'ragdoll']
}
console.log(mascota)
console.log(mascota.nombre)
//Para asignar un valor fuera del objeto uso el signo igual y no los dos puntos como dentro del objeto:
mascota.id = 1
console.log(mascota)
console.log(mascota.razas[2])

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//DESTRUCTURING OBJECTS (crear constantes a partir de objetos):

const nombreMascota = mascota.nombre//Hay otra forma de hacer esto.
console.log(nombreMascota);

const {edad: edad2} = mascota;//saco la variable de dentro del objeto y hasta le puedo dar otro nombre
console.log(edad2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//OBJETOS con objetos en su interior:
const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.carolina.ar'
    },
    redesSociales:{
        youtube:{
            enlace:'youtube.com/carolina',
            nombre: 'carolina.yt'
        },
        facebook:{
            enlace: 'facebook.com/carolina',
            nombre: 'carolina.fb'
        }
    }
}

console.log(web.redesSociales.youtube.enlace);

//Creo constante:
const enlaceFB = web.redesSociales.facebook.enlace
console.log(enlaceFB);

//Otra opción: destructuring object
const {enlace: enlaceYT, nombre: nombreYT} = web.redesSociales.youtube
console.log(enlaceYT)
console.log(nombreYT)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//FETCH:

//Vamos a utilizar fetch para leer APIs.
//Una API es una respuesta del servidor que nos entrega datos que podemos consumir en nuestro sitio web.
//En este ejemplo vamos a utilizar PokéApi (info sobre pokemones). Esta es una API pública que no nos pide permisos para consumirla.

fetch('https://pokeapi.co/api/v2/pokemon')

.then(respuesta=> respuesta.json())
//.then recibe una función de flecha
//Como la función tiene solo un parámetro podemos omitir los paréntesis.
//Puedo también omitir las llaves y el return.
//Una función de flecha me devuelve automáticamente lo que está a la derecha de la flecha.
//Sin abreviar:
// .then((respuesta)=>{
//     return respuesta.json()
// })
//La respuesta es la respuesta de la url.
//Le pedimos que la respuesta la retorne en formato json (porque vamos a recibir un json)

.then(data=>{
    //console.log(data);
    //console.log(data.results);
    // data.results.forEach(element=>{
    //     console.log(element.name);
    // });
})
//console.log(data.results);
//data porque le pusimos de nombre data
//results porque accedo a un array results del objeto jason que recibí
//Recorro el array con forEach y accedo solo al nombre de cada objeto del array results

//Nosotros esperamos una promesa con el .then, pero si falla, para eso tenemos el catch, para "atrapar" los errores:
.catch(error => console.log(error))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//ASYNC & AWAIT
//then se sigue utilizando pero async y await nos ahorran un poco de código

const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')//esperamos la petición
        const data = await res.json()
        //console.log(data.results)
        data.results.forEach(element=>{
            console.log(element.name);
        })
    } catch (error) {
        console.log(error);
    }
}
obtenerPokemones()
