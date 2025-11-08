let matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ]
  let transpuesta = []
  for (let i = 0; i < matriz[0].length; i++) {
    transpuesta[i] = []
    for (let j = 0; j < matriz.length; j++) {
      transpuesta[i][j] = matriz[j][i]
    }
  }
  console.log(transpuesta)
  