const express = require('express');
const router = express.Router();
const itemVendaController = require('../controller/item_vendaController');

router.get('/itens', itemVendaController.listarItensVenda);
router.post('/itens', itemVendaController.adicionarItemVenda);
router.get('/itens', itemVendaController.editarItemVenda);
router.post('/itens', itemVendaController.alterarItemVenda);
router.post('/itens', itemVendaController.excluirItemVenda);


module.exports = router;