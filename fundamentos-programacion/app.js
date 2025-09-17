let nombre = "José Soto";
let edad = 19;
let tienePermiso = true;
const PI = 3.14159;

console.log("--- 1. Variables y Tipos de Datos ---");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Tiene permiso? ${tienePermiso}`);
console.log(`El valor de PI es: ${PI}`);
console.log(`Tipo de dato de 'edad': ${typeof edad}`);

console.log("\n--- 2.1 Condicionales ---");
const calificacion = 90;

if (calificacion >= 70) {
    console.log("¡Aprobado!");
} else {
    console.log("Reprobado");
}

console.log("\n--- 2.2 Bucles ---");
console.log("Bucle for:");
const frutas = ["sandia", "pera", "piña"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Me gusta la ${frutas[i]}`);
}

console.log("Bucle white:");
let contador = 1;
while (contador < 6) {
    console.log(`El contador es: ${contador}`);
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
const resultadoSuma = sumar(6, 8);
console.log(`La suma de 6 y 8 es: ${resultadoSuma}`);