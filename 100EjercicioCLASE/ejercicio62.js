let matriz = [
    [2, 4, 6],
    [1, 3, 5],
    [7, 9, 11]
  ]
  for (let i = 0; i < matriz.length; i++) {
    let sumaFila = 0
    for (let j = 0; j < matriz[i].length; j++) {
      sumaFila += matriz[i][j]
    }
    console.log("fila", i + 1, "=", sumaFila)
  }
  