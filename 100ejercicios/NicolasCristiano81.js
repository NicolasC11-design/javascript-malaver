let NicolasCristiano = 81
let arr = Array.from({length: NicolasCristiano}, (_,i)=>i+1)
let sum = arr.reduce((a,b)=>a+b,0)
console.log(sum)
