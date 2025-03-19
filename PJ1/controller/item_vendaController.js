const Item_Venda = require('../Model/item_vendaModel');

exports.listarItensVenda = async (req, res) => {
    const itens = await Item_Venda.findAll();
    res.json(itens);
}


exports.adicionarItemVenda = async (req, res) => {
    const { id } = req.body;
    const itens = await Item_Venda.create({ id });
    res.json(itens);
} 


// Carrega os dados do cliente para edição
exports.editarItemVenda = async (req, res) => {
    const { id } = req.params;
    const itens = await Item_Venda.findByPk(id);
    res.render('editarItemVenda', { itens });
};

// Atualiza os dados do cliente
exports.alterarItemVenda = async (req, res) => {
    const { id } = req.params;
    const { venda_id, livro_id, quantidade, preco_unitario } = req.body;
    await Cliente.update({ venda_id, livro_id, quantidade, preco_unitario }, { where: { id } });
    res.redirect('/itens');
};

// Exclui um cliente
exports.excluirItemVenda = async (req, res) => {
    const { id } = req.params;
    await Cliente.destroy({ where: { id } });
    res.redirect('/itens');
};