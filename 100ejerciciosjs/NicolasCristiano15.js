let NicolasCristiano = 15
const set = new Set([NicolasCristiano, NicolasCristiano+0, NicolasCristiano+2])
let len = 0
set.forEach(()=>len++)
console.log(len)
