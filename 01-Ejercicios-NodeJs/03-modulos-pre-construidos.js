// En este ejercicio realizaré importaciones de algunos módulos 
// que han sido creados e instalados por defecto junto a node
// Toda su documentación está en su página oficial
let os = require('os');

console.log('Memoria Total: ', os.totalmem);

console.log('Memorio Disponible: ', os.freemem);

console.log('Sistema Operativo: ', os.platform);

console.log('Mis datos: ', os.userInfo);