const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('./clientes', clientesController.listarClientes);
router.post('./clientes', clientesController.adicionarCliente);
router.get('./clientes', clientesController.editarCliente);
router.post('./clientes', clientesController.alterarCliente);
router.post('./clientes', clientesController.excluirCliente);


module.exports = router;