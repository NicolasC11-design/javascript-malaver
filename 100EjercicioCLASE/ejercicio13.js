let n = 7
let esPrimo = true
for (let i = 2; i < n; i++) {
  if (n % i === 0) esPrimo = false
}
if (n > 1 && esPrimo) {
  console.log("primo")
} else {
  console.log("no primo")
}
