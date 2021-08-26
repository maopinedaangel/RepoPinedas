/*
 Estructura de un condicional
  if (Acá se pone la condición) {
    //Acá se pone lo que hay que hacer si la condición es verdadera
  } else {
    //Acá se pone lo que hay que hacer si la condición es false
  };
*/

// Escribir una función que reciba el valor de un producto, el número de unidades que se desea comprar y el dinero disponible. La función debe retornar un mensaje que diga si el dinero es o no suficiente.

function esDineroSuficiente(valor, unidades, valorDisponible) {
  let valorRequerido = valor * unidades;
  if (valorDisponible >= valorRequerido) {
    let valorSobrante = valorDisponible - valorRequerido;
    return "El dinero es suficiente. Tu devuelta es de $" + valorSobrante;
  } else {
    return "El dinero no es suficiente."
  };
};

console.log(esDineroSuficiente(600, 30, 20000));


// Escribir una función que reciba un número y devuelva un mensaje respondiendo si el número es o no mayor que 1.
function mayorQueUno(x) {
  if (x > 1) {
    return "El número es mayor";
  } else {
    return "El número no es mayor";
  }  
};

//Otra versión
function esMayorQueUno(x) {
  let respuesta;
  if (x > 1) {
    respuesta = "El número es mayor";
  } else {
    respuesta = "El número no es mayor";
  };
  return respuesta;
};



console.log(mayorQueUno(10));

/*Operadores:
- Aritméticos: + - * /
- De comparación == != === !== > < >= <=
- Lógicos &|& || !
- De concatenación +
*/

// Escribir una función que reciba el valor de una compra y aplique un descuento del 20% si el valor de la compra es inferior a 100.000, y del 30% si el valor de la compra es igual o superior a 100.000. La función debe retornar el valor final a pagar.

//valorCompra = Valor de la compra sin aplicar descuentos
//valorAPagar = Valor de la compra después de aplicar descuentos
function compra(valorCompra) {
  let descuento;
  if (valorCompra < 100000) {
    descuento = 0.20;
  } else {
    descuento = 0.30;
  };
  let valorDescuento = descuento * valorCompra;
  let valorAPagar = valorCompra - valorDescuento;
  return valorAPagar;
}

console.log("El valor a pagar es " + compra(500000));

//La misma operación pero utilizando una función aparte para calcular el descuento
function descuento(valor, porcentajeDescuento) {
  valorDescuento = valor *(porcentaje / 100);
  return valorDescuento;
};

function compra2(valorCompra) {
  let valorAPagar;
  if (valorCompra >= 100000) {
    valorAPagar = valorCompra - descuento(valorCompra, 30);
  } else {
    valorAPagar = valorCompra - descuento(valorCompra, 20);    
  }
  return valorAPagar;
};


// Escribir una función que reciba dos strings, claveEnBD y claveDigitada y verifique si son iguales. Si son iguales, la función debe devolver el mensaje "Contraseña correcta"; si son diferentes debe retornar el mensaje "Contraseña incorrecta"

// Escribir una función llamada esClaveCorrecta que reciba dos strings, claveEnBD y claveDigitada y verifique si son iguales. La función debe devolver un valor booleano. Si son iguales, la función debe devolver true; y si son diferentes debe retornar false

function esClaveCorrecta(claveEnBD, claveDigitada){
if (claveEnBD === claveDigitada){ return true}
else{return false}
}

console.log(esClaveCorrecta('2468', '2467'));

// Escribir una función que reciba el valor de una compra y el medio de pago. Si el valor de la compra es superior a 100.000 y se paga en efectivo, se debe aplicar un descuento de 30%; si la compra es superior a 100.000 y el pago es con tarjeta, se debe aplicar un descuento del 20%. Si la compra es inferior o igual a 100.000, se debe aplicar un descuento del 10%, independiente del medio de pago. La función debe retornar el valor final a pagar.


function valorFinal(valorCompra, medioDePago) {
  if (valorCompra <= 100000) {
    descuento = 0.10;
  }
  if (valorCompra > 100000 && medioDePago === "efectivo") {
    descuento = 0.30;
  }
  if (valorCompra > 100000 && medioDePago === "tarjeta") {
    descuento = 0.20;
  }
  let valorDescuento = descuento * valorCompra;
  let valorFinalAPagar = valorCompra - valorDescuento;
  return valorFinalAPagar;
}

console.log(valorFinal(80000, "efectivo"));


function valorFinal2(valorCompra, medioDePago) {
  if (valorCompra <= 100000) {
    descuento = 0.10;
  } else if (valorCompra > 100000 && medioDePago === "efectivo") {
    descuento = 0.30;
  } else if (valorCompra > 100000 && medioDePago === "tarjeta") {
    descuento = 0.20;
  }
  let valorDescuento = descuento * valorCompra;
  let valorFinalAPagar = valorCompra - valorDescuento;
  return valorFinalAPagar;
}

console.log(valorFinal2(80000, "efectivo"));


function valorFinal3(valorCompra, medioDePago) {
  if (valorCompra <= 100000) {
    descuento = 0.10;
  }
  if (valorCompra > 100000) {
    if (medioDePago = "efectivo") {
      descuento = 0.30;
    } else {
      descuento = 0.20;
    }
  }
  let valorDescuento = descuento * valorCompra;
  let valorFinalAPagar = valorCompra - valorDescuento;
  return valorFinalAPagar;
}

console.log(valorFinal3(80000, "efectivo"));


