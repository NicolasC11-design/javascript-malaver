let numeros = [3, 9, 1, 7, 5]
let mayor = numeros[0]
let menor = numeros[0]
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i]
  if (numeros[i] < menor) menor = numeros[i]
}
console.log("mayor:", mayor)
console.log("menor:", menor)
