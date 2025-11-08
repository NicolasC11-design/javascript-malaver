let texto = "abc123de45"
let contador = 0
for (let i = 0; i < texto.length; i++) {
  if (!isNaN(texto[i]) && texto[i] !== " ") contador++
}
console.log("números:", contador)
