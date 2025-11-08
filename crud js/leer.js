const fs = require('fs');
const ARCHIVO = 'datos.txt';

fs.readFile(ARCHIVO, 'utf-8', (err,data) =>{
    if (err) throw err;
    console.log(data);
})
