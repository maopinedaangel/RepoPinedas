// Escribir una función que recibe el precio de lista de un producto (en pesos) y el descuento aplicable (en porcentaje), y devuelva el valor final a pagar (en pesos). Imprimir un mensaje en consola con el valor final,ej: "El valor final a pagar es 64000"


function valorPagar(a, b){
let precioSinDescuento=1000
let porcentajeDescuento=0.20
let descuento=200

let valor = precioSinDescuento-descuento

  return "El valor final a pagar es $ " + valor;
}

console.log(valorPagar(1000, 0.20));


function valorPagar(precioSinDescuento, porcentajeDescuento) {
  let descuento = precioSinDescuento * porcentajeDescuento
  let valor = precioSinDescuento-descuento
  return "El valor final a pagar es $ " + valor;
}

console.log(valorPagar(5000, 0.30));


// Escribir una función que calcule la liquidación de un empleado, a partir del sueldo básico mensual y el número de días trabajados. La liquidación incluye cesantías, vacaciones y prima. Cesantías=30 días por año trabajado. Vacaciones=15 días por año trabajado. Prima= 30 días por año trabajado. Considerar que 1 año equivale a 12 meses de 30 días.


function liquidacion(sueldo, diasTrabajados) {
  let valorCesantias = sueldo/360*diasTrabajados;
  let valorPrima = sueldo/360*diasTrabajados;
  let valorVacaciones = sueldo/360*diasTrabajados/2;
  let valorLiquidacion = valorCesantias + valorPrima + valorVacaciones;

  return valorLiquidacion;
}


console.log("El valor de la liquidación es " + liquidacion(2000000, 150));


// Escribir una función que calcule las cesantías de un empleado, a partir del sueldo básico mensual y el número de días trabajados. Se pagan 30 días de cesantía por cada año trabajado. Considerar que 1 año equivale a 12 meses de 30 días.


function cesantias(sueldo, diasTrabajados) {
  let valorCesantias = sueldo/360*diasTrabajados;
  return valorCesantias;
};

function primas(sueldo, diasTrabajados) {
  let valorPrimas = sueldo/360*diasTrabajados;
  return valorPrimas;
};

function vacaciones(sueldo, diasTrabajados) {
  let valorVacaciones = sueldo/360*diasTrabajados/2;
  return valorVacaciones;
};


console.log("El valor de las cesantías es $" + Math.round(cesantias(2000000, 150)) + ", el valor de las primas es $" + Math.round(primas(2000000, 150)) + " y el valor de las vacaciones es $" + Math.round(vacaciones(2000000, 150)) + ".");

console.log(Math.floor(7.25)); // floor = piso. Aproxima por debajo
console.log(Math.ceil(7.25)); // ceil = cielo. Aproxima por encima
console.log(Math.round(7.25)); // Aproxima al más cercano




function obtenerLiquidacion(salario, dias) {
  console.log("El valor de las cesantías es $" + Math.round(cesantias(salario, dias)) + ", el valor de las primas es $" + Math.round(primas(salario, dias)) + " y el valor de las vacaciones es $" + Math.round(vacaciones(salario, dias)) + ".");

  
}

obtenerLiquidacion(3000000, 180);
