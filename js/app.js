// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
  let fecha = new Date();
  let mes =fecha.getMonth()+1;
  let dia = fecha.getDate();
  let año = fecha.getFullYear();
  if(dia < 10){
    dia = '0'+ dia ;
  }else{
    dia;
  }

  if(mes < 10){
    mes = '0' + mes;
  }else{
    mes;
  }

  return dia+'/'+mes+'/'+año;
  
}


// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
  if (typeof radio !== "number" || radio < 0) {
    return null;
}else if(radio == 0){
  return 0;
}else{
  let area = Math.PI*(radio**2);
  return Number(area.toFixed(2));
}
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  let cont = 0;
    if (typeof cadena !== 'string') {
        cont = -1;
    } else {
        const vocales = "aeiouAEIOU";
        let tamaño = cadena.length;
        for (let i=0; i<tamaño; i++) {
            if (vocales.includes(cadena[i])) {
                cont++;
            }
        }
    }
      return cont;
 
}
  
  
// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  if (typeof celsius !=='number'){
    return null;
  }else{
  let fahrenheit=(celsius * 9/5) + 32;
  return Number(fahrenheit.toFixed(2));
  }
}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {

}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {

}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

  if(comienzo < 0){
    return null;
  }else if(comienzo > fin){
    return null;
  };

  return Math.floor(Math.random() * (comienzo - fin +1) + fin);
}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  
}