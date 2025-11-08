let A = [
    [8, 5],
    [3, 9]
  ]
  let B = [
    [2, 4],
    [1, 6]
  ]
  let C = []
  for (let i = 0; i < 2; i++) {
    C[i] = []
    for (let j = 0; j < 2; j++) {
      C[i][j] = A[i][j] - B[i][j]
    }
  }
  console.log(C)
  