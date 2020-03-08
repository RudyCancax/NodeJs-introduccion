/**
 * Importamos el módulo pre instalado por defecto 'fs' 
 * que se refiere al Fyle System
 */
const fs = require('fs');

/*
    Usamos la función "writeFile" (Crear Archivo) al cual le indicamos la ruta (path)
    Indicamos el contenido del archivo,
    luego capturamos si existe algún error, hacemos uso de una función de flecha
    e indicamos si existe algún error, o imprimimos que el archivo  ha sido creado

    Node js tiene la peculiaridad que delega la función crear archivo al SO mientras
    él sigue con el programa, por eso, muestra por consola primero
    el console.log("última línea"), y queda a la espera (CALLBACK) a la respuesta del SO
    por la creació del archivo indicado
 */
fs.writeFile('./04-archivo-pre-construido.txt', "Esta es la línea uno del arcihvo", (err) => {
    if (err) throw err;
    console.log('El Archivo ha sido Creado.');
});

console.log("última línea del programa");