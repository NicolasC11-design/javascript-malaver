let A = [
    [1, 2],
    [3, 4]
  ]
  let B = [
    [5, 6],
    [7, 8]
  ]
  let C = []
  for (let i = 0; i < 2; i++) {
    C[i] = []
    for (let j = 0; j < 2; j++) {
      C[i][j] = A[i][j] + B[i][j]
    }
  }
  console.log(C)
  