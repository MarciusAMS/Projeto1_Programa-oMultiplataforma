const express = require('express');
const router = express.Router();
const itemVendaController = require('../controller/item_vendaController');

router.get('/itens', itemVendaController.listarItensVenda);
router.post('/itens', itemVendaController.adicionarItemVenda);
router.get('/itens', itemVendaController.editarItemVenda);
router.put('/itens', itemVendaController.alterarItemVenda);
router.delete('/itens', itemVendaController.excluirItemVenda);


module.exports = router;