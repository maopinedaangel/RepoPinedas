function multiplicar(x,y){
  return x*y;
}

//Una opción
console.log(multiplicar (5, 10));

//Otra opción
let resultado = multiplicar(5,10);
console.log(resultado);


function cuadradoDeUnNumero(a){
  return a*a;
}

let resulta=cuadradoDeUnNumero(5);
console.log(resulta);


function cuadrado1(a) {
  let producto = multiplicar(a,a);
  return producto;
};

function cuadrado2(a) {
  return multiplicar(a,a);
};

console.log(cuadrado1(7));
console.log(cuadrado2(7));

function sumar(a,b){
  return a + b;
}

console.log(sumar(10,5));

function promedio(a,b,c){
  return (a + b + c)/3;
}

console.log(promedio(5, 10, 15));

/*
function promedio(a,b,c) {
  let promedio = (a + b + c)/3;
  return promedio
}

function promedio(a, b, c) {
  let suma = a + b + c;
  return suma/3;
}

function promedio(a, b, c) {
  let suma = a + b + c;
  let promedio = suma / 3;
  return promedio;
}

function promedio(a, b, c) {
  let promedio = a + b + c; // promedio = 30
  promedio = promedio / 3; // promedio = 10
  return promedio;
}
*/

function sumarTres(x, y, z){
  return sumar(x, y) + z;
}

console.log(sumarTres(4, 7, 10));

/*
function sumarTres(x, y, z) {
  let w = sumar(x, y); // w = 11
  return sumar(w, z); // retorna 21
}

function sumarTres(x, y, z) {
  return sumar(sumar(x, y), z);
}
*/

function promedioDeTres(a,b,c) {
  return sumarTres(a,b,c)/3;
}

console.log(promedioDeTres(12,16,20));


// Escribir una función que reciba un string con el día de la semana e imprima en un mensaje por consola. Ej: "Hoy es domingo"

function diaDeHoy(diaDeLaSemana) {
  return "Hoy es " + diaDeLaSemana;
}

console.log(diaDeHoy("Domingo"));


// Escribir una función que reciba tres parámetros: dia (de tipo number), mes (de tipo string), y ano (de tipo number), e imprima un mensaje. Ej "Hoy es 21 de agosto de 2021"

function fecha(dia, mes, ano){
  return "Hoy es " + dia + " de " + mes + " de " + ano;
}

console.log(fecha("21", "agosto", "2021"));

//Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total. Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.

//15% de 300 es (15/100)*300. Retorna 45.

function calcularPorcentaje(total, porcentaje) {
  let precio = (porcentaje/100)*total;
  return precio;
}

console.log(calcularPorcentaje(300,15));

/*Si en vez de procentaje se recibe decimal
function calcularPorcentaje(total, decimal) {
  let precio = decimal*total;
  return precio;
}
*/

