let numeros = [4, 7, 10, 13, 16]
let suma = 0
let cont = 0
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    suma += numeros[i]
    cont++
  }
}
let promedio = cont > 0 ? suma / cont : 0
console.log("promedio pares:", promedio)
