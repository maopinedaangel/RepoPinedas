/*
Variables
Tipos de datos: number, string, boolean, NaN, null, undefined
Funciones
Condicionales: if, if-else, switch
Strings
Arrays
Ciclos for
Ciclos while, do while
*/


/*Strings*/
let palabra = "Hola";

/*
console.log(palabra.length);
console.log(palabra.indexOf("o"));
console.log(palabra.indexOf("a"));
console.log(palabra.indexOf("la"));
*/

let otraPalabra = "Horóscopo";

/*indexOf*/
//console.log(otraPalabra.indexOf("ó"));
let frase = "Hoy es miércoles y tengo clase"
//console.log(frase.indexOf("es"));

/*slice*/
/* console.log(frase.slice(4,6)); // Toma los caracteres 4 y 5. El caracter 6 no se incluye.
console.log(frase.slice(19,24)); // Toma los caracteres desde el 19 hasta el 23
console.log(frase.slice(19)); // Toma todos los caracteres a partir del 19 */

let prueba = "amor"
//console.log(prueba.slice(0,4));

/*replace*/
frase = frase.replace("miércoles", "jueves");
//console.log(frase);

/*split*/
/* console.log(frase.split(" "));
console.log(frase.split("y")); */

let arrayDePalabras = frase.split(" ");
/* console.log(arrayDePalabras);
console.log(arrayDePalabras[3]); */


let arrayDeNumeros = [4, 7, 10, 13, 16];
//console.log(arrayDeNumeros[1]);

let arrayCombinado = ["Pedro", 25, false];
let arrayPersona = ["Nadir", 40, ["Imperativa", "Bases de datos"]];

arrayPersona[2].push('Learning agility');

/* console.log(arrayPersona);
console.log(arrayPersona[2]);
console.log(arrayPersona[2][2]); */

let arrayAnimales = ['perro', 'vaca', 'camello', 'tiranosaurio'];

arrayAnimales.pop();
//console.log(arrayAnimales);

arrayAnimales.shift();
//console.log(arrayAnimales);

arrayAnimales.push('elefante');
//console.log(arrayAnimales);

arrayAnimales.unshift('culebra');
//console.log(arrayAnimales);

arrayAnimales.push('león', 'tiburón');
//console.log(arrayAnimales);


let arrayComida = ['sanduche', 'hamburguesa', 'perro'];

/* console.log(arrayComida.length);
console.log(arrayComida.indexOf('perro'));
console.log(arrayComida.includes('perro'));
console.log(arrayComida.join());
console.log(arrayComida); */



let listaPersonas = ['Juan', 'Luis', 'Maria'];

/*Crear una función que reciba una array de nombres y verifique si 'Nadir' está en la lista. Si no está, agregarlo, y si ya está imprimir el mensaje 'Nadir ya está en la lista'*/



function agregarANadir(arrayNombres) {
    if (arrayNombres.includes('Nadir')) {
        console.log("Nadir ya está en la lista.");
    } else {
        arrayNombres.push('Nadir');
    };
    return arrayNombres;
};

listaPersonas = agregarANadir(listaPersonas);
console.log(listaPersonas);
listaPersonas = agregarANadir(listaPersonas);
console.log(listaPersonas);



function agregarAAlguien(arrayNombres, nuevoNombre) {
    if (arrayNombres.includes(nuevoNombre)) {
        console.log(nuevoNombre + " ya está en la lista.");
    } else {
        arrayNombres.push(nuevoNombre);
    };
    return arrayNombres;    
};

listaPersonas = agregarAAlguien(listaPersonas, 'Mauricio');
console.log(listaPersonas);
listaPersonas = agregarAAlguien(listaPersonas, 'Mauricio');
console.log(listaPersonas);