const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

// Adaptar rotas, toda vez que chamar Alterar, Incluir chamar GET por estar consultando o banco.
// Quando necessitar manipular os valores do banco usar POST, PUT, DELETE, etc.

router.get('/novo', (req, res) => {res.render('clientes/adicionarCliente'); });

router.get('/', clientesController.listarClientes);
router.post('/novo', clientesController.adicionarCliente);
router.get('/:id', clientesController.editarCliente);
router.put('/:id', clientesController.alterarCliente);
router.delete('/excluir/:id', clientesController.excluirCliente);


module.exports = router;