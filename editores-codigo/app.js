console.log("--- 1. Arreglos y Objetos ---");
const numeros = [5, 10, 15, 20, 25, 30, 35, 40];
console.log(`El cuarto elemento del arreglo es: ${numeros[3]}`);

const persona = {
  nombre: "Javier",
  edad: "26 años",
  profesion: "Escritor"
};
console.log (`El nombre del individuo es: ${persona.nombre}`);
console.log (`La profesión del individuo es: ${persona.profesion}`);
console.log (`La edad del individuo es: ${persona.edad}`);

console.log("\n--- 2. Métodos de Arreglos ---");
numeros.push(30);
console.log(`Los elementos del arreglo después de .push() son: ${numeros}`);
numeros.pop();
console.log(`Los elementos del arreglo después de .pop() son: ${numeros}`);

console.log("Iterando con .forEach():");
numeros.forEach(numero => {
  console.log(numero);
});

const numerostriplicados = numeros.map(numero => numero * 3);
console.log(`Elementos originales: ${numeros}`);
console.log(`Elementos triplicados con .map(): ${numerostriplicados}`);

const numerosMayoresDe30 = numeros.filter(numero => numero > 30);
console.log(`Los números mayores de 30 son: ${numerosMayoresDe30}`);

console.log("\n--- 3. Manipulación del DOM (Document Object Model) ---");
const titulo = document.getElementById('tituloPrincipal');
const lista = document.querySelector('.lista');

if (titulo) {
  titulo.textContent = '¡DOM de Javier en Acción!';
  titulo.style.color = 'green';
}

if (lista) {
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = 'Nuevo elemeto de Javier';
  lista.appendChild(nuevoItem);
}