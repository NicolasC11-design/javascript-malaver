let matriz = [
    [5, 2, 1],
    [3, 4, 6],
    [7, 8, 9]
  ]
  let suma = 0
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][i]
  }
  console.log("suma diagonal:", suma)
  