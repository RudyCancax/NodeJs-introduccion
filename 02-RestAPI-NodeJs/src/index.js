// Importamos el módulo 'express' y 'morgan'
const express = require('express');
// El Framework 'express' lo ejecutamos y guardamos en la constante 'app'
const app = express();

const morgan = require('morgan'); // Es un middleware, es una funció que procesa datos antes que el servidor lo reciba

// Importamos todos los demás módulos que necesitemos
const colors = require('colors');



// Settings
app.set('port', process.env.PORT || 3000); // Si existe un puerto definido, que lo use, de lo contrario usara el 3000
app.set('json spaces', 2); //Espaciado del objeto que se envía respecto del borde izquierdo


// middlewares de morgan que permiten ver por consola lo que va llegando/peticiones al servidor.  
app.use(morgan('dev'));
app.use(express.json()); //Soporte para formatos Json
app.use(express.urlencoded({ extended: false })); // Para soporte de datos que vienen desde formularios (posiblemente html)

// Rutas
app.use(require('./routes/index')); // Archivo que contiene las rutas principales
app.use('/api/peliculas', require('./routes/peliculas')); // Archivo que contiene las demás rutas, específicamos que debe comenzar con /api/

// Ejecutamos nuestra aplicación (servidor), específicamos el puerto
app.listen(3000, () => {
    console.log('Servidor ejecutandose en puerto: '.yellow,
        'http://localhost:3000'.green);

});