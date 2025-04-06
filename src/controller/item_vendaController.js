const Item_Venda = require('../Model/item_vendaModel');

exports.listarItemVenda = async (req, res) => {
    const itens = await Item_Venda.findAll();
    res.render('itens/consultaItens', { itens });
}


exports.adicionarItemVenda = async (req, res) => {
    const { venda_id, livro_id, quantidade, preco_unitario } = req.body;
    await Item_Venda.create({ venda_id, livro_id, quantidade, preco_unitario });
    res.redirect('/api/itens/novo');
} 


exports.editarItemVenda = async (req, res) => {
    const { id } = req.params;
    const itens = await Item_Venda.findByPk(id);
    res.render('itens/editaritens', { itens });
};


exports.alterarItemVenda = async (req, res) => {
    const { id } = req.params;
    const { venda_id, livro_id, quantidade, preco_unitario } = req.body;
    await Item_Venda.update({ venda_id, livro_id, quantidade, preco_unitario }, { where: { id } });
    res.redirect('/api/itens');
};


exports.excluirItemVenda = async (req, res) => {
    const { id } = req.params;
    await Item_Venda.destroy({ where: { id } });
    res.redirect('/api/itens');
};