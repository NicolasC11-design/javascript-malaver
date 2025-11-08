let n = 3
let identidad = []
for (let i = 0; i < n; i++) {
  identidad[i] = []
  for (let j = 0; j < n; j++) {
    identidad[i][j] = i === j ? 1 : 0
  }
}
console.log(identidad)
