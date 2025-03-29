const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

// Adaptar rotas, toda vez que chamar Alterar, Incluir chamar GET por estar consultando o banco.
// Quando necessitar manipular os valores do banco usar POST, PUT, DELETE, etc.

router.get('/', clientesController.listarClientes);
router.post('/', clientesController.adicionarCliente);
router.get('/:id', clientesController.editarCliente);
router.put('/', clientesController.alterarCliente);
router.delete('/', clientesController.excluirCliente);


module.exports = router;