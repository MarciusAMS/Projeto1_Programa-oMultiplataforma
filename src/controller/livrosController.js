const Livros = require('../Model/livrosModel');

exports.listarLivros = async (req, res) => {
    const livros = await Livros.findAll();
    res.render(livros);
}


exports.adicionarLivro = async (req, res) => {
    const { id } = req.body;
    const livros = await Livros.create({ id });
    res.render(livros);
} 


exports.editarLivro = async (req, res) => {
    const { id } = req.params;
    const livros = await Livros.findByPk(id);
    res.render('editarLivro', { livros });
};


exports.alterarLivro = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque } = req.body;
    await Livros.update({ titulo, autor, editora, ano_publicacao, isbn, preco, quantidade_estoque }, { where: { id } });
    res.redirect('/livros');
};


exports.excluirCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.destroy({ where: { id } });
    res.redirect('/livros');
};

