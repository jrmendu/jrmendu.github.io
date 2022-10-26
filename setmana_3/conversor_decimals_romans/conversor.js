// script per convertir numeros a romans

// llegim el camp del input i call a convertir
let numRomano = convertir();
document.getElementById('resultados').innerText = numRomano;

function convertir() {
    // validar que el numero entrat sigui entre 0 i 3999
    let numDecimal = document.getElementById("myInputA").valueAsNumber;

    if (numDecimal < 1) {
        alert("El numero ha de ser positiu");
        return NaN;
    } else if (numDecimal > 3999) {
        alert("No podem representar aquest numero")
        return NaN;
    } 
    return numDecimal

    // equivalencies
    
    // rebre un numero decimal enter


    // descomposem el numero en CDU


    // equivalències amb numeració romana


    // ordenar i eliminar els simbols necesaris
}

// convertir els numeros en lletres
function simbolosRomano(num) {
        /* 
    1   --> I
    5   --> V
    10  --> X
    50  --> L
    100 --> C
    500 --> D
    1000 -> M
    */
    let caracter = '';
    if (num === 1)          {return "I";} 
    else if (num === 5)     {return "V";}
    else if (num === 10)    {return "X";}    
    else if (num === 50)    {return "L";} 
    else if (num === 100)   {return "C";}
    else if (num === 500)   {return "D";} 
    else if (num === 1000)  {return "M";} 
    else                    {return NaN;}
}

/* Descomposició dels numeros en Centenes, Desenes, Unitats
    1989    --> [1,9,8,9]   --> [M,C,D,U]   --> [M,C,X,I]    */

function descomposicio(num) {
    let llistaNum = [];             // declarem llista buida
    let cadena = String(num)        // passem el numero rebut a cadena per poder accedir digit a digit

    // mirem quants digits té la cadena per afegir-ne si no en té 4
    if (cadena.length == 1) {cadena = '000' + cadena;} 
    else if ( cadena.length == 2) {cadena = '00' + cadena;} 
    else if (cadena.length == 3) {cadena = '0' + cadena;} 
    
    // afegim elements a la llista buida 
    llistaNum[0] = Number(cadena[0])
    llistaNum[1] = Number(cadena[1])
    llistaNum[2] = Number(cadena[2])
    llistaNum[3] = Number(cadena[3])

    return llistaNum
    console.log(llistaNum);
}
