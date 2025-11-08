let NicolasCristiano = 74
const map = new Map([[1, NicolasCristiano],[2, NicolasCristiano+1]])
let v = 0
for(const [k,val] of map) v += k*val
console.log(v)
