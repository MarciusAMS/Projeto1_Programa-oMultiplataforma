const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('./clientes', clientesController.listarClientes);
router.post('./clientes', clientesController.adicionarCliente);


module.exports = router;