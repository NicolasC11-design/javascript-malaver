let numeros = [4, 5, 4, 7, 4, 2]
let valor = 4
let contador = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === valor) contador++
}
console.log("veces repetido:", contador)
