let figura = "cuadrado"
let lado = 4
let base = 5
let altura = 3
let radio = 2
switch (figura) {
  case "cuadrado": console.log(lado * lado); break
  case "rectángulo": console.log(base * altura); break
  case "triángulo": console.log((base * altura) / 2); break
  case "círculo": console.log(3.1416 * radio * radio); break
  default: console.log("figura no válida")
}
