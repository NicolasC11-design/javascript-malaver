let NicolasCristiano = 65
const set = new Set([NicolasCristiano, NicolasCristiano+2, NicolasCristiano+2])
let len = 0
set.forEach(()=>len++)
console.log(len)
