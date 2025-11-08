let matriz = []
for (let i = 0; i < 3; i++) {
  matriz[i] = []
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10)
  }
}
console.log(matriz)
