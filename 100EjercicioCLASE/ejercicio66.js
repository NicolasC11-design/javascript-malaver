let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  let principal = 0
  let secundaria = 0
  for (let i = 0; i < matriz.length; i++) {
    principal += matriz[i][i]
    secundaria += matriz[i][matriz.length - 1 - i]
  }
  console.log("principal:", principal)
  console.log("secundaria:", secundaria)
  