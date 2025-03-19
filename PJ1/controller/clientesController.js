const Cliente = require('../Model/clientesModel.js');


exports.listarClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.render(clientes); // trocar por Render quando for usar EJS
};

exports.adicionarCliente = async (req, res) => {
    const { nome, endereco, telefone, email } = req.body;
    const cliente = await Cliente.create({ nome, endereco, telefone, email });
    res.render(cliente);
};

// Carrega os dados do cliente para edição
exports.editarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    res.render('editarCliente', { cliente });
};

// Atualiza os dados do cliente
exports.alterarCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, telefone, email } = req.body;
    await Cliente.update({ nome, endereco, telefone, email }, { where: { id } });
    res.redirect('/clientes');
};

// Exclui um cliente
exports.excluirCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.destroy({ where: { id } });
    res.redirect('/clientes');
};