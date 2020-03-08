const { Router } = require('express');
const router = Router();

const peliculas = require('../ejemplo.json');
console.log(peliculas);


router.get('/', (req, res) => {
    //res.send("pelis");
    res.json(peliculas);
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.send('recibido');

});


module.exports = router;