let numeros = [1, 2, 3, 4, 5, 6]
let suma = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) suma += numeros[i]
}
console.log("suma pares:", suma)
