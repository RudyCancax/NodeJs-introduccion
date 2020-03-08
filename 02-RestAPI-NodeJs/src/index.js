// Importamos el módulo 'express' y 'morgan'
const express = require('express');
// El Framework 'express' lo ejecutamos y guardamos en la constante 'app'
const app = express();

const morgan = require('morgan'); // Es un middleware, es una funció que procesa datos antes que el servidor lo reciba

// Importamos todos los demás módulos que necesitemos
const colors = require('colors');



// middlewares de morgan que permiten ver por consola lo que va llegando/peticiones al servidor.  
app.use(morgan('dev'));
app.use(express.json()); //Soporte para formatos Json
app.use(express.urlencoded({ extended: false })); // Para soporte de datos que vienen desde formularios (posiblemente html)


// Settings
app.set('port', 3000);


// Ejecutamos nuestra aplicación (servidor), específicamos el puerto
app.listen(3000, () => {
    console.log('Servidor ejecutandose en puerto: '.yellow,
        'http://localhost:3000'.green);

});