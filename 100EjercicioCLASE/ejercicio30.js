let jugador = "piedra"
let cpu = "tijera"
if (jugador === cpu) console.log("empate")
else if (
  (jugador === "piedra" && cpu === "tijera") ||
  (jugador === "tijera" && cpu === "papel") ||
  (jugador === "papel" && cpu === "piedra")
) console.log("ganas")
else console.log("pierdes")
