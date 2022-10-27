/* Funciones */

// Ejemplo: función que calcula el precio final de un producto añadiendo 21% de IVA

let variableGlobal = "Texto en línea 5";
let variableGlobal2 = "Texto en línea 6";

// Definimos variables con el objeto donde vamos a colocar el resultado
let ejemplo = document.getElementById("ejemplo");
let ejemplo2 = document.getElementById("ejemplo2");
// Usar o LLAMAR la función calcularPrecioFinal
let precio = calcularPrecioFinal(100); 
// Escribir el dato recibido de la fn en el elemento ejemplo
ejemplo.innerText = "Ejemplo 1 --> El precio calculado es: " + String(precio) + " €.";
ejemplo2.innerText = "Ejemplo 2 --> " + calcularPrecioFinal2(200);

/* Ejercicios */
let ejercicio1 = document.getElementById("ejercicio-1");
let array = calcularDesglose(100);
ejercicio1.innerText = "Return de la funció --> " + array;

// Escribimos variable global
// Variable Global 
modificarVariableGlobal();
console.log(variableGlobal);
// Variable Global 2
modificarVariableGlobal2();
console.log(variableGlobal2);

/* Funciones */

// Input o entrada: precioBase
// Función que calcula el 21% del IVA y lo suma al precioBase. 
// Output o salida: precioFinal
function calcularPrecioFinal(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    return precioFinal;
}

function calcularPrecioFinal2(precioBase){
    // Calculamos IVA como el 21% del parámetro precioBase
    let iva = 21/100 * precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado
    let salidaFormateada = "El precio calculado es: " + String(precioFinal) + " €.";
    return salidaFormateada;
}

/* Función para practicar scope o ámbito */
function modificarVariableGlobal(){
    variableGlobal = "Nuevo texto desde función en línea 39"
}
/* Función para practicar scope o ámbito */
function modificarVariableGlobal2(){
    let variableGlobal2;
    variableGlobal2 = "Nuevo texto desde función en línea 45"
}

// Ejercicio -> recibimos cantidad total y calculamos el desglose de precio base e IVA
function calcularDesglose(precioFinal){
    let precioBase = precioFinal / 1.21;
    let iva = precioFinal - precioBase;
    // Ej. limitar los decimales a 2 decimales
    // Ej. cambiar a texto -> formatear la salida
    return [precioBase, iva]
}
// Ejercicio -> función que añada 10% de IVA
// Ejercicio -> función que añada 4% de IVA

// Calculadora