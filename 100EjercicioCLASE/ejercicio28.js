let horas = 45
let tarifa = 10
let pago = horas <= 40 ? horas * tarifa : (40 * tarifa) + ((horas - 40) * tarifa * 1.5)
console.log("pago:", pago)
