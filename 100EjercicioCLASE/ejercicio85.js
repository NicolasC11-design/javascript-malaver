let frase = "aprendiendo javascript es divertido"
let palabras = frase.split(" ")
let contador = 0
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 5) contador++
}
console.log("palabras largas:", contador)
