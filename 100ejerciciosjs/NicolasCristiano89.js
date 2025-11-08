let NicolasCristiano = 89
class C{constructor(v){this.v=v}sum(n){let s=0; for(let i=0;i<n;i++)s+=this.v; return s}}
const c=new C(NicolasCristiano)
console.log(c.sum(3))
