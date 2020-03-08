// El método ROUTER permite establecer nuevas rutas para el servidor
const { Router } = require('express');
const router = Router(); // Lo almacenamos en la constante router

// routes / rutas
router.get('/', (req, res) => { // Usando router podemos establecer las nuevas rutas

    res.json({ "Title": "Hola Mundo desde Json." }); // Mandamos un objeto con formato json
});

module.exports = router;