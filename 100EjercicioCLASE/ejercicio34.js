let horas = 42
let tarifa = 20
let pago = horas > 40 ? (40 * tarifa) + ((horas - 40) * tarifa * 1.5) : horas * tarifa
console.log("pago total:", pago)
