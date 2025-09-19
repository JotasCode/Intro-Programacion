let nombre = "José Soto";
let edad = 19;
let tienePermiso = true;
const PI = 3.14159;

console.log("--- 1. Variables y Tipos de Datos ---");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Tiene permiso? ${tienePermiso}`);
console.log(`El valor de PI es: ${PI}`);
console.log(`Tipo de dato de edad: ${typeof edad}`);

console.log("\n--- 2.1 Condicionales ---");
const calificacion = 80;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70 && calificacion < 90) {
    console.log("Bien hecho");
} else if (calificacion >= 50 && calificacion < 70) {
    console.log("Mal hecho")
} else {
    console.log("Horrible")
}

console.log("\n--- 2.2 Bucles ---");
console.log("Bucle 1 for:");
const frutas = ["sandia", "pera", "piña"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Me gusta la ${frutas[i]} por la mañana.`);
}

console.log ("\n Bucle 2 for:");
const comida = ["arroz blanco", "locrio de salami", "moro de habichuelas negras"];
for (let i = 0; i < comida.length; i++){
    console.log (`Me gusta el ${comida[i]}.`);
}

console.log("\n Bucle de números:");
let contador = 1;
while (contador <= 5) {
    console.log(`Yo compré ${contador} de menta hoy.`);
    contador++;
}

console.log("\n--- 3. Funciones ---");
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function sumar(a,b) {
    return a + b;
}

saludar("María");
const resultadoSuma = sumar(9, 9);
console.log(`La semana pasada cumpliste ${resultadoSuma} años, ¿cierto?`);