let matriz = [
    [2, 4],
    [6, 8]
  ]
  let escalar = 3
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      matriz[i][j] *= escalar
    }
  }
  console.log(matriz)
  