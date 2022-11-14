/* Calculadora */ 

function calc() {
    let numA = document.getElementById("myInputA")
    let numB = document.getElementById("myInputB")

    numA = numA.valueAsNumber
    numB = numB.valueAsNumber

/*
    let resultado1 = suma(Number(numA.value), numB.valueAsNumber)
    let resultado2 = resta(Number(numA.value), numB.valueAsNumber)
    let resultado3 = producto(Number(numA.value), numB.valueAsNumber)
    let resultado4 = division(Number(numA.value), numB.valueAsNumber)
    let resultado5 = raizCuadrada(Number(numA.value))
    let resultado6 = potencia(Number(numA.value), numB.valueAsNumber)
    let resultado7 = log10(Number(numA.value))

    console.log("Resultados:")
    console.log("Valor de A: " + numA.value)
    console.log("Valor de B: " + numB.value)
    console.log("Suma: " + resultado1)
    console.log("Resta: " + resultado2)
    console.log("Producto: " + resultado3)
    console.log("División: " + resultado4)
    console.log("Raiz Cuadrada: " + resultado5)
    console.log("Potencia: " + resultado6)
    console.log("Logaritmo: " + resultado7)
*/
    let operacionesSel = document.getElementById("operaciones")  //tibem del select
    let posicion = operacionesSel.options['selectedIndex']    // ens torna un enter indicant 
                                                //la posició escollida, o sigui l'option escollit
    

    if (posicion === 0) {
        let res = suma(numA, numB)
        escribirResultado(res)
    } else if (posicion === 1) {
        let res = resta(numA, numB)
        escribirResultado(res)
    } else if (posicion === 2) {
        let res = producto(numA, numB)
        escribirResultado(res)
    } else if (posicion === 3) {
        let res = division(numA, numB)
        escribirResultado(res)
    } else if (posicion === 4) {
        let res = potencia(numA, numB)
        escribirResultado(res)
    } else if (posicion === 5) {
        let res = raizCuadrada(numA)
        escribirResultado(res)
    } else if (posicion === 6) {
        let res = log10(numA)
        escribirResultado(res)
    }     
}


// funció per escriure resultat
function escribirResultado(num) {
    let textarea = document.getElementById("resultados")
    textarea.innerText = String(num)
}
/*
function escribirResultado(num) {
    let pantalla = document.getElementById("resultados")
    pantalla.innerText() = String(num)
}*/

// Funciones para operaciones básicas + - * / ** % sqrt() log() 
// Suma
function suma(a, b) {
    return a + b;
}

// Resta
function resta(a, b) {
    return a - b;
}

// Producto
function producto(a, b) {
    return a * b;
}
// División
function division(a, b) {
    if ( b === 0) {
        alert("No es pot dividir per 0");
        return NaN;
    }
    return a / b;
}

// Raíz cuadrada -> Math.sqrt(num)
function raizCuadrada(num) {
    if ( num < 0) {
        alert("No existeix l'arrel quadrada de numeros negatius");
        return Nan;
    }
    return (Math.sqrt(num)).toFixed(2);
}

// Potencia -> Math.pow(base, exponente)
function potencia(base, exponente) {
    if ( base === 0 & exponente === 0) {
        alert("0 elevado a 0 es indeterminado!!!");
        return Nan;
    }
    return Math.pow(base, exponente);
}

// Log -> Math.log(num)
function log10(num){
    if( num <= 0 ){
        alert("No existe log para números no positivos!!!")
        return NaN;
    }
    return (Math.log10(num)).toFixed(2);
}
// Botones para realizar cálculos
// inputs para ingresar datos
// Estilos