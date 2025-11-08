let numeros = [4, 8, 15, 16, 23, 42]
let buscar = 15
let encontrado = false
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === buscar) encontrado = true
}
console.log(encontrado ? "encontrado" : "no encontrado")
