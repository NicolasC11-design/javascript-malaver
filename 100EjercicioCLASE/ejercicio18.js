let a = 6
let b = 8
let m = a * b
while (b !== 0) {
  let t = b
  b = a % b
  a = t
}
let mcm = m / a
console.log("mcm:", mcm)
