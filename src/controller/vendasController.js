const Venda = require('../Model/vendasModel');

exports.listarVendas = async (req, res) => {
    const vendas = await Venda.findAll();
    res.render(vendas);
}


exports.adicionarVenda = async (req, res) => {
    const { id } = req.body;
    const vendas = await Venda.create({ id });
    res.render(vendas);
} 


exports.editarVenda = async (req, res) => {
    const { id } = req.params;
    const vendas = await Venda.findByPk(id);
    res.render('editarVenda', { vendas });
};


exports.alterarVenda = async (req, res) => {
    const { id } = req.params;
    const { cliente_id, data_venda, valor_total } = req.body;
    await Venda.update({ cliente_id, data_venda, valor_total }, { where: { id } });
    res.redirect('/vendas');
};

exports.excluirVenda = async (req, res) => {
    const { id } = req.params;
    await Venda.destroy({ where: { id } });
    res.redirect('/vendas');
};
