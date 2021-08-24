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

function obtenerLiquidacion(salario, dias) {
  let mensaje = "El valor de las cesantías es $"; 
  mensaje = mensaje + Math.round(cesantias(salario, dias));
  mensaje = mensaje + ", el valor de las primas es $";
  mensaje = mensaje + Math.round(primas(salario, dias));
  mensaje = mensaje + " y el valor de las vacaciones es $";
  mensaje = mensaje + Math.round(vacaciones(salario, dias)) + ".";
  return mensaje;  
}

console.log(obtenerLiquidacion(3000000, 180));