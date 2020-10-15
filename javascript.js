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

//condicional:
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