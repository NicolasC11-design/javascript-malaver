let año = 2024
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  console.log("bisiesto")
} else {
  console.log("no bisiesto")
}
