const { log } = require('console');
const fs = require('fs');
const ARCHIVO = 'datos.txt';

fs.writeFile(ARCHIVO,'Este es mi primer comit', (err)=> err ? console.error(err): console.log('Archivo guardado Correctamente'));