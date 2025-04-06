const Venda = require('../Model/vendasModel');
  
exports.listarVendas = async (req, res) => {
    const vendas = await Venda.findAll();
    res.render('vendas/consultaVendas', { vendas: vendas || [] });
}


exports.adicionarVenda = async (req, res) => {
    const { cliente_id, data_venda, valor_total } = req.body;
    await Venda.create({ cliente_id, data_venda, valor_total });
    res.redirect('/api/vendas');
} 


exports.editarVenda = async (req, res) => {
    const { id } = req.params;
    const vendas = await Venda.findByPk(id);
    res.render('editarVenda', { vendas: vendas });
};


exports.alterarVenda = async (req, res) => {
    const { id } = req.params;
    const { cliente_id, data_venda, valor_total } = req.body;
    await Venda.update({ cliente_id, data_venda, valor_total }, { where: { id } });
    res.redirect('/api/vendas');
};

exports.excluirVenda = async (req, res) => {
    const { id } = req.params;
    await Venda.destroy({ where: { id } });
    res.redirect('/api/vendas');
};
