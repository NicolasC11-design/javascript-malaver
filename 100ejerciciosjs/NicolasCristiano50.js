let NicolasCristiano = 50
const g = function*(start, count){let v=start; for(let i=0;i<count;i++){yield v++}}
console.log([...g(NicolasCristiano,3)])
