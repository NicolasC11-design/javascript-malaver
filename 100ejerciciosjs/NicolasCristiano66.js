let NicolasCristiano = 66
const obj = {a: NicolasCristiano, b: NicolasCristiano+1}
const vals = Object.values(obj)
console.log(vals.reduce((x,y)=>x+y,0))
