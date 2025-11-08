let ingreso = 3500
let impuesto
if (ingreso <= 1000) impuesto = ingreso * 0.05
else if (ingreso <= 3000) impuesto = ingreso * 0.1
else impuesto = ingreso * 0.15
console.log("impuesto:", impuesto)
