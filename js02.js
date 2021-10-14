let numero = prompt("Añade un numero")
console.log(numero);

saludar(numero);

function saludar(numero) {
    for (let i = 0; i < numero; i++) {
        console.log("Hola");
    }

}