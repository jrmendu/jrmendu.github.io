/* Bucle for */
// exemple 1
let texto = "";

for (let i = 0; i < 100; i++) {
    texto += "hola"
}

document.getElementById("ejemplo").innerText = texto

// exemple 2 --> numeros parells de 0 a 100
let parells = 0
let array = []

for (let i = 0; i <=100; i++) {
    if (i % 2 == 0) {
        parells += 1
        array.push(i)
    }
}

document.getElementById("ejemplo2").innerText = "De 0 a 100 hi ha " + parells + 
                                            " numeros parells.\nSon en aquesta llista \n" + array;

// Podem escriure codi html. No molt recomenable aixi
let html = "";
for(let i = 0; i <=5; i++) {
    html += "<p> paragraf: " + String(i) + "</p>\n";}
document.getElementById("ejercicio-1").innerHTML = html;

// divisors de 20
let divisors = "";
let limit = 100;
for(let i = 1; i <= limit; i++) {
    if(20 % i == 0) {
        divisors += i + ",  "
    }
}
document.getElementById("ejercicio-2").innerText = "Divisors de " + limit + " --> " + divisors;
