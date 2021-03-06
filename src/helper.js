// obtener la diferencia de año
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// calcular el precio segun marca  asiatico=5%, americano=15%, europeo=30%

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.3;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

// caalcula el tipo de seguro segun el plan
export function obtenerPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}

// cambiar el texto del objeto a capitalize
export function primeraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
