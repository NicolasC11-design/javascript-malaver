let matriz = [
    [4, 8, 2],
    [9, 1, 6],
    [3, 7, 5]
  ]
  let mayor = matriz[0][0]
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > mayor) mayor = matriz[i][j]
    }
  }
  console.log("mayor:", mayor)
  