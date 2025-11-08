let numeros = [3, 7, 10, 15, 2]
let limite = 5
let contador = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > limite) contador++
}
console.log("mayores que", limite + ":", contador)
