const direcciones = require('../controllers/direcciones')
const chat = require('../controllers/chatGPT')
const express = require('express')
const router = express.Router();

router.route('/').get(direcciones.inicio)
router.route('/formulario').get(direcciones.form)

router.route('/consultar').post((req, res) => {
    chat.consulta(req, res, 'Genera una frase de mínimo ocho palabras y máximo ocho palabras');
});

module.exports = router;
