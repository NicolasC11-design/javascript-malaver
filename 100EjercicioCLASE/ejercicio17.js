let a = 20
let b = 12
while (b !== 0) {
  let t = b
  b = a % b
  a = t
}
console.log("mcd:", a)
