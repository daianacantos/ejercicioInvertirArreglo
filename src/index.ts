/*Estructuras de Datos
Invertir Arreglo
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
55
Ejemplo:
v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1*/

let dimensionN: number = Number(prompt("ingrese dimensionN"));
let numeroIngresado: number[] = new Array(dimensionN);
for (let i: number = 0; i < numeroIngresado.length; i++) {
  numeroIngresado[i] = Number(prompt("ingrese numeros"));

  console.log(" el numero ingresado es: ", numeroIngresado[i]);
}
for (let i = numeroIngresado.length - 1; i >= 0; i--) {
  console.log("Array invertido", numeroIngresado[i]);
}
