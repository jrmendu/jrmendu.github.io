// script per convertir fraccions a decimals

function convertir() {
    let numerador = document.getElementById("myInputA").valueAsNumber;
    let denominador = document.getElementById("myInputB").valueAsNumber;
    let decimales = document.getElementById("decimales").options.selectedIndex;
    let resultado = (numerador / denominador);

    if (denominador == 0) {

    }
    document.getElementById("resultados").innerText = String(resultado.toFixed(decimales));
}

