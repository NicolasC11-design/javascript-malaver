let texto = "2manzanas3peras5uvas"
let suma = 0
for (let i = 0; i < texto.length; i++) {
  if (!isNaN(texto[i]) && texto[i] !== " ") suma += parseInt(texto[i])
}
console.log("suma:", suma)
