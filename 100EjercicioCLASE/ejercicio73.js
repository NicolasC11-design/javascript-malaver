let texto = "computadora"
let consonantes = 0
for (let i = 0; i < texto.length; i++) {
  let letra = texto[i]
  if (!"aeiou".includes(letra)) consonantes++
}
console.log("consonantes:", consonantes)
