let texto = "abc9xyz"
let tieneNumero = false
for (let i = 0; i < texto.length; i++) {
  if (!isNaN(texto[i]) && texto[i] !== " ") tieneNumero = true
}
console.log(tieneNumero ? "sí contiene número" : "no contiene número")
