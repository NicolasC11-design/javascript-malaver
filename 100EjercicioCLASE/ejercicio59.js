let numeros = [8, 3, 5, 1, 9]
for (let i = 0; i < numeros.length; i++) {
  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] > numeros[j]) {
      let temp = numeros[i]
      numeros[i] = numeros[j]
      numeros[j] = temp
    }
  }
}
console.log(numeros)
