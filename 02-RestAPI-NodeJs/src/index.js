// Importamos el módulo 'express' y 'morgan'
const express = require('express');
// El Framework 'express' lo ejecutamos y guardamos en la constante 'app'
const app = express();

const morgan = require('morgan'); // Es un middleware, es una funció que procesa datos antes que el servidor lo reciba

// middlewares de morgan que permiten ver por consola lo que va llegando/peticiones al servidor.  
app.use(morgan('dev'));


// Importamos todos los demás módulos que necesitemos
const colors = require('colors');



// Ejecutamos nuestra aplicación (servidor), específicamos el puerto
app.listen(3000, () => {
    console.log('Servidor ejecutandose en puerto: '.yellow,
        'http:localhost:3000'.green);

});