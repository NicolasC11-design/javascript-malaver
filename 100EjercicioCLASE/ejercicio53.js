let numeros = [2, 5, 8, 9, 12]
let pares = 0
let impares = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) pares++
  else impares++
}
console.log("pares:", pares)
console.log("impares:", impares)
