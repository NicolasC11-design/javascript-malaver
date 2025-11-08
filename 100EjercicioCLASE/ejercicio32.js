let saldo = 500
let retiro = 200
if (retiro <= saldo) {
  saldo -= retiro
  console.log("retiro exitoso, saldo:", saldo)
} else {
  console.log("fondos insuficientes")
}
