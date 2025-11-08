let matriz = [
    [2, 4, 6],
    [8, 10, 12]
  ]
  let suma = 0
  let total = 0
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j]
      total++
    }
  }
  console.log("promedio:", suma / total)
  