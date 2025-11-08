let num = 1234
let invertido = 0
while (num > 0) {
  invertido = invertido * 10 + (num % 10)
  num = Math.floor(num / 10)
}
console.log("invertido:", invertido)
