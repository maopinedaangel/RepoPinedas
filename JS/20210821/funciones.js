//Funciones declaradas

//Declarar una función que imprima "Hola a todos" en la consola
function saludar() {
    console.log("Hola a todos");
};
// Es una función declarada
// Esta función no tiene parámetros
// Esta función no retorna nada

//Llamar la función
saludar();

//Declarar una función que reciba el nombre de una persona e imprima el saludo a esa persona.
let persona = "Nadir"; // Declara la variable persona y le Asigna el valor "Nadir"

function saludarA(pers) {
    console.log("Hola a " + pers)
}
// Es una función declarada
// Tiene requiere parámetro que se llama 'individuo'
// La función no retorna nada

// Llamar la función
saludarA(); // Retorna "Hola a undefined", porque el parámetro 'individuo' no tiene ningún valor
saludarA("Mauricio"); // La función se llama con el argumento 'Mauricio'. Retorna "Hola a Mauricio"
saludarA(persona); // Retorna "Hola a Nadir"


// Ejercicios
// Escribir una función que reciba un string con el día de la semana e imprima en un mensaje por consola. Ej: "Hoy es domingo"


// Escribir una función que reciba tres parámetros: dia (de tipo number), mes (de tipo string), y ano (de tipo number), e imprima un mensaje. Ej "Hoy es 21 de agosto de 2021"


// Escribir una función que reciba el precio de un producto y retorne el valor del IVA (del 19%). A continuación imprimir el valor del IVA y el valor total del producto incluyendo el IVA. Ej: "El valor del IVa es 38000. El valor total con IVA es 238000"


// Escribir una función que calcule el valor de un producto en promoción. La función debe recibir dos parámetros, el precio de lista del producto y el porcentaje de descuento, y retonar el precio final. Imprimir en consola el precio final de un producto que vale $120.000 y tiene el 25% de descuento. Ej: "El precio final del producto es 90000"


// Usar las dos funciones anteriores para calcular el precio final de un producto con precio de lista $200.000 al que se le debe aplicar IVA del 20% y después un descuento del 40%. Ej: "El valor final del producto es xxxxxx"


// Escribir una función que calcule y retorne el pago que debe recibir un empleado a partir de dos parámetros: el valor de cada hora de trabajo y el número de horas. Usar la función para clacular el valor que debe recibir un empleado que trabajó 15 horas, a $30.000 por hora. Imprimr el resultado en consola. Ej: "El valor a pagar es xxxxx"


// Escribir una función que reciba el apellido y el género de una persona (hombre o mujer) y devuelva un saludo incluyendo ambos parámetros. Si es hombre, escribir "Hola, Sr." y si es mujer "Hola, Sra.". Ej "Hola, Sr. Fernández"


// Escribir una función que reciba dos números y retorne el mayor de ellos. 


// Escribir una función que reciba el precio de un producto y la suma de dinero disponible y retorne la cantidad máxima de unidades del producto que se podrían comprar.

