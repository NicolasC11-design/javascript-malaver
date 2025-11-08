let palabra = "radar"
let invertida = ""
for (let i = palabra.length - 1; i >= 0; i--) {
  invertida += palabra[i]
}
console.log(palabra === invertida ? "palíndromo" : "no palíndromo")
