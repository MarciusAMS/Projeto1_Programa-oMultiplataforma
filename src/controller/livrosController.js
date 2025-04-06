const Livros = require('../Model/livrosModel');

exports.listarLivros = async (req, res) => {
    const livros = await Livros.findAll();
    res.render('livros/consultaLivros', { livros: livros || [] });
};


exports.adicionarLivro = async (req, res) => {
    const { titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque } = req.body;
     await Livros.create({ titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque });
    res.redirect('/api/livros');
} 

exports.editarLivro = async (req, res) => {
    const { id } = req.params;
    const livros = await Livros.findByPk(id);
    res.render('livros/editarLivros', { livro: livros });
};


exports.alterarLivro = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque } = req.body;
    await Livros.update({ titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque }, { where: { id } });
    res.redirect('/api/livros');
};


exports.excluirLivro = async (req, res) => {
    const { id } = req.params;
    await Livros.destroy({ where: { id } });
    res.redirect('/api/livros');
};



