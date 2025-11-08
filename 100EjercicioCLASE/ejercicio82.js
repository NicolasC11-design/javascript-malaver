let texto = "Hola Mundo JS"
let mayus = 0
for (let i = 0; i < texto.length; i++) {
  let c = texto[i]
  if (c >= "A" && c <= "Z") mayus++
}
console.log("mayúsculas:", mayus)
