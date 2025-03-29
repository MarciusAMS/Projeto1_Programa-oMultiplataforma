const Cliente = require('../Model/clientesModel.js');


exports.listarClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.render('consultaCliente'); // trocar por Render quando for usar EJS e JSON para teste em HTTP ou ISOMNIA
  //  res.status(200).json(clientes);
};

exports.adicionarCliente = async (req, res) => {
    const { nome, endereco, telefone, email } = req.body;
    const cliente = await Cliente.create({ nome, endereco, telefone, email });
    res.render(cliente);
};


exports.editarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    res.render('editarCliente', { cliente });
};


exports.alterarCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, endereco, telefone, email } = req.body;
    await Cliente.update({ nome, endereco, telefone, email }, { where: { id } });
    res.redirect('/clientes');
};


exports.excluirCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.destroy({ where: { id } });
    res.redirect('/clientes');
};