// script per convertir fraccions a decimals

function convertir() {
    let numerador = document.getElementById("myInputA").valueAsNumber;
    let denominador = document.getElementById("myInputB").valueAsNumber;
    let decimales = document.getElementById("decimales").options.selectedIndex;
    let resultado = (numerador / denominador);

    if (denominador === 0) {
        alert("El denominador no pot ser 0");
        return "";
    }
    document.getElementById("resultados").innerText = String(resultado.toFixed(decimales));
}

function reset() {
    let numerador = document.getElementById("myInputA")
    let denominador = document.getElementById("myInputB")
    let resultat = document.getElementById("resultados")
    let decimales = document.getElementById("decimales")

    numerador.value = "";
    denominador.value = "";
    resultat.innerText = "";
    decimales.options['selectedIndex'] = 2;
}

