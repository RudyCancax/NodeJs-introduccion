const { Router } = require('express');
const router = Router();

const peliculas = require('../ejemplo.json'); // Importamos el archivo json
console.log(peliculas); //Imprimimos por consola el objeto json


router.get('/', (req, res) => { // Usamos el método get del router, que muestra en la ruta
    //res.send("pelis");        // el objeto que contiene el archivo json en la página
    res.json(peliculas);
});

// Mediante el método post, la página puede enviar información al servidor
router.post('/', (req, res) => {
    console.log(req.body); // Mostramos en consola el contenido del objeto recibido
    res.send('recibido'); // Confirmamos/respondemos de recibido

});


module.exports = router;