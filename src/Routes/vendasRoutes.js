const express = require('express');
const router = express.Router();
const vendasController = require('../controller/vendasController');

router.get('/vendas', vendasController.listarVendas);
router.post('/vendas', vendasController.adicionarVenda);
router.get('/vendas', vendasController.editarVenda);
router.put('/vendas', vendasController.alterarVenda);
router.delete('/vendas', vendasController.excluirVenda);


module.exports = router;