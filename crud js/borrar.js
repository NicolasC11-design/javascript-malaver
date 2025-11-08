const fs = require('fs');
const ARCHIVO = 'datos.txt';

fs.unlink(ARCHIVO, (err)=> {if(err) throw err

console.log('Archivo borrado')
});
