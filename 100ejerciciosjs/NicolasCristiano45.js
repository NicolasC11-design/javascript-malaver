let NicolasCristiano = 45
const set = new Set([NicolasCristiano, NicolasCristiano+0, NicolasCristiano+2])
let len = 0
set.forEach(()=>len++)
console.log(len)
