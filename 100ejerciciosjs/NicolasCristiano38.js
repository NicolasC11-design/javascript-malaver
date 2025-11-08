let NicolasCristiano = 38
const res = Array.from({length:3}, (_,k)=>k+NicolasCristiano).map(x=>x%5).filter(x=>x>0)
console.log(res)
