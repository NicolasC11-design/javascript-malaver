let n = 3
let matriz = []
let valor = 1
for (let i = 0; i < n; i++) {
  matriz[i] = []
  for (let j = 0; j < n; j++) {
    matriz[i][j] = valor++
  }
}
console.log(matriz)
