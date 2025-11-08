let matriz = [
    [2, 5, 8],
    [3, 6, 9],
    [4, 7, 10]
  ]
  let pares = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) pares++
    }
  }
  console.log("pares:", pares)
  