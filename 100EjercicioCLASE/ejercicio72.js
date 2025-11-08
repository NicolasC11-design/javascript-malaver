let texto = "javascript"
let contador = 0
for (let i = 0; i < texto.length; i++) {
  if ("aeiou".includes(texto[i])) contador++
}
console.log("vocales:", contador)
