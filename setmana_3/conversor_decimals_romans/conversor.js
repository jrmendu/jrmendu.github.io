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

// Fn que procesa el array del número 
// Recibe array de descomponer(num) -> [1, 9, 8, 9]
// Devuelve string de caracteres
function procesarArray(arr) {
    let char0, char1, char2, char3;
    let str;

    char0 = String(arr[0]); // miles -> 0, 1, 2, 3
    char1 = String(arr[1]); // centenas
    char2 = String(arr[2]); // decenas
    char3 = String(arr[3]); // unidades

    let milRomano = simbolosRomano(1000)
    let dRomano = simbolosRomano(500)
    let cienRomano = simbolosRomano(100)
    let diezRomano = simbolosRomano(10)
    let unoRomano = simbolosRomano(1)

    // -- Repetir para cada char --
    // Si es cero -> nada -> ""
    
    // Miles: 0, 1, 2, 3
    if( char0 == 0 )     { char0 = "" }
    else if( char0 == 1 ){ char0 = milRomano }            // treu M
    else if( char0 == 2 ){ char0 = milRomano.repeat(2) }  // treu MM
    else if( char0 == 3 ){ char0 = milRomano.repeat(3) }  // treu MMM

    // Centenas: 0, 1, 2, 3
    if( char1 == 0 )     { char1 = "" }
    else if( char1 >= 1 & char1 <= 3){ char1 = cienRomano.repeat(char1) } // treu C, CC, CCC
    // centenes 4 -> CD
    else if( char1 == 4 ){ char1 = cienRomano + dRomano }
    // centenes 5 -> D
    else if(char1 == 5) {char1 = dRomano}
    // centenes 6 DC, 7 DCC, 8 DCCC
    else if(char1 >= 6 & char1 <= 8) {
        char1 = dRomano + cienRomano.repeat(Number(char1) - 5)
    }
    // centenes 9 CM
    else if( char1 == 9 ){ char1 = cienRomano + milRomano }
    else if( char1 == 3 ){ char1 = milRomano.repeat(3) }
    // Decenas: 0, 1 ... 9

    // Unidades: 0, ... 9

    // Si es 1, 5, 10, 50, 100, 500, 1000 -> simboloRomano(num)
    simbolosValidos = [1, 5, 10, 50, 100, 500, 1000]
    
    // Si es cualquier otro valor, ej. 4, 9... 
        // -> lógica para pedir 5 - 1 -> IV o 10 - 1 -> IX
    
    str = char0 + char1 + char2 + char3; 
    return str;
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
