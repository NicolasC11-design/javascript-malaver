let texto = "Hola Mundo JS"
let minus = 0
for (let i = 0; i < texto.length; i++) {
  let c = texto[i]
  if (c >= "a" && c <= "z") minus++
}
console.log("minúsculas:", minus)
