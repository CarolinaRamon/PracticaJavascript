// alert('funcionando');

var numero = 2020;
var numero2 = 20;
var texto = '40';

//alert(numero);

//alert(numero + numero2);

//alert(numero + texto);

//numero = 2030;

alert(numero);

const num = 1800;

var num2 = num + 1;

//num2++;
num2--;

console.log(num2);

var nombre = 'Elizabeth';

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

//ARRAYS:
var arreglo = [1, 2, 3, 'Carolina', true];

console.log(arreglo);
console.log(arreglo[3]);

//FOR:
for(var i=0;i<5;i++){
    console.log(arreglo[i]);
}

//WHILE:
var i=0;
while(i<5){
    console.log(i);
    i++;
}

// DO WHILE:
var i=6;
do{
    console.log(i);
    i++;
}while(i<5);

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

//FUNCIONES:

var numerito1 = 10;
var numerito2 = 20;

function suma(){
    return console.log(numerito1 + numerito2);
}

suma();

function suma(n1, n2){
    return console.log(n1+n2);
}

suma(80,20);

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

//FUNCION PUSH:
const numeros = [12,13,14,15];
//numeros = [30];//esto tira error
numeros.push(16);
console.log(numeros);
