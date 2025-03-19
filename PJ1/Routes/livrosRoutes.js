const express = require('express');
const router = express.Router();
const livrosController = require('../controller/livrosController');

router.get('/livros', livrosController.listarLivros);
router.post('/livros', livrosController.adicionarLivro);
router.get('/livros', livrosController.editarLivro);
router.put('/livros', livrosController.alterarLivro);
router.delete('/livros', livrosController.excluirCliente);


module.exports = router;