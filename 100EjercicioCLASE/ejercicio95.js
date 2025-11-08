let matriz = [
    [1, 2],
    [3, 4]
  ]
  let producto = 1
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      producto *= matriz[i][j]
    }
  }
  console.log("producto:", producto)
  