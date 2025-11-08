let numeros = [1, 2, 2, 3, 4, 4, 5]
let resultado = []
for (let i = 0; i < numeros.length; i++) {
  if (!resultado.includes(numeros[i])) resultado.push(numeros[i])
}
console.log(resultado)
