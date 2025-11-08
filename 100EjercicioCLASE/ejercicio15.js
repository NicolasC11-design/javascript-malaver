let numero = 1234
let suma = 0
while (numero > 0) {
  suma += numero % 10
  numero = Math.floor(numero / 10)
}
console.log("suma:", suma)
