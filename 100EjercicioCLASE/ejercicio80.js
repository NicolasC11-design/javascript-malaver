let frase = "hola que tal estas"
let espacios = 0
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === " ") espacios++
}
console.log("espacios:", espacios)
