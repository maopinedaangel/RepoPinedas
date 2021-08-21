// Calcular el descuento que ofrece un almacén por un producto. El almacén ofrece el 30% de descuento.

// almacenar el precio de lista del producto en una variable
let precioLista = 80000;

// Escribir una función que calcule y retorne el descuento
// Función declarada
function calcularDescuento(precio) {
    return 0.30*precio;
}

// Imprimir un string indicando el valor del descuento y el precio final
//Opción 1
console.log("El valor del descuento es " + calcularDescuento(precioLista));

//Opción 2
let valorDescuento;
valorDescuento = calcularDescuento(precioLista);
console.log("El valor del descuento es " + valorDescuento);


// Función expresada. La función no tiene nombre, sino que se guarda en una variable.
// 'precio' es un parámetro
// 'precioLista' es un argumento
// La función se invoca pasando un argumento
// El parámetro 'precio' toma el valor del argumento 'precioLista'
let miDescuento = function(precio) {
    return 0.30*precio;    
}
console.log("El valor del descuento es " + miDescuento(precioLista));

// Función para calcular el doble de un número
//Parámetro: x
let doble = function(x) {
    return x*2;
}

// Calcular el doble de 5 e imprimirlo en la consola
//Argumento: 5
console.log(doble(5)); // Igual a 10
