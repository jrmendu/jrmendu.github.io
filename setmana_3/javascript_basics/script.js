/* Provem operadors aritmètics */

/* Operadores :  + - * / & ** ++ -- */
let operadores = document.getElementById("operadores");
/* operadores.innerText = "Operadores"; */

let operacion_combinada_texto = "Operación combinada: 10 + (22 / 2) + (5-8) + 2**3";
let operacion_combinada = 10 + (22 / 2) + (5-8) + 2**3;

operadores.innerText = operacion_combinada_texto + "\n" + "Total: " + String(operacion_combinada);


/* asignacion con operadores aritméticos */
let asignacion = document.getElementById("asignacion");
let contador = 0;
asignacion.innerText = contador;

/* botó que incrementa i decrementa en fer clic */
function incrementar() {
    ++contador;
    asignacion.innerText = contador.toFixed(2);
}

function decrementar() {
    --contador;
    asignacion.innerText = contador.toFixed(2);
}

function doblar() {
    contador *= 2;
    asignacion.innerText = contador.toFixed(2);
}

function mitad() {
    contador /= 2;
    asignacion.innerText = contador.toFixed(2);
}

function sumar() {
    let numero = window.prompt("Entra un numero: ");
    if (isNaN(parseInt(numero))) {
        alert("no es un buen numero")
        asignacion.innerText = contador.toFixed(2);
    } else {
    contador += parseInt(numero);
    asignacion.innerText = contador.toFixed(2);
    }
}

function restar() {
    let numero = window.prompt("Entra un numero: ");
    if (isNaN(parseInt(numero))) {
        alert("no es un buen numero")
        asignacion.innerText = contador.toFixed(2);
    } else {
    contador -= parseInt(numero);
    asignacion.innerText = contador.toFixed(2);
    }
}

function multiplicar() {
    let numero = window.prompt("Entra un numero: ");
    if ( isNaN(parseInt(numero)) || (numero == "0")) {
        alert("no es un buen numero");
        asignacion.innerText = contador.toFixed(2);
    } else {
        contador *= parseInt(numero);
        asignacion.innerText = contador.toFixed(2);
    }
}

function dividir() {
    let numero = window.prompt("Entra un numero: ");
    if (isNaN(parseInt(numero)) || parseInt(numero)==0) {
        alert("no es un buen numero")
        asignacion.innerText = contador.toFixed(2);
    } else {
        contador /= parseInt(numero);
        asignacion.innerText = contador.toFixed(2);
    }
}

function exponent() {
    let numero = window.prompt("Entra un numero: ");
    if (isNaN(parseInt(numero))) {
        alert("no es un buen numero")
        asignacion.innerText = contador.toFixed(2);
    } else {
    contador **= parseInt(numero);
    asignacion.innerText = contador.toFixed(2);
    }
}

function reiniciar() {
    contador = 0;
    asignacion.innerText = contador;
}


/*tipos */ 
let tipos = document.getElementById("tipos");

let number = 100.5;
let exp = 546e5;  /*afegeix tants zeros */
let string = "Texto";
let array = [1,2,3];
let arrayString = ["text1", "text2", "text3"];
let objetos = {"campo-key":"valor", "otro_campo_key": "otro_valor"}

tipos.innerText = number + "\n" +  exp + "\n" + string + "\n" + array + "\n" + arrayString + "\n" + objetos;
