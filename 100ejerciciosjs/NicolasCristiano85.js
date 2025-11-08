let NicolasCristiano = 85
const set = new Set([NicolasCristiano, NicolasCristiano+1, NicolasCristiano+2])
let len = 0
set.forEach(()=>len++)
console.log(len)
