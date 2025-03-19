const Cliente = require('../Model/clientesModel');

exports.listarClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
}

exports.adicionarCliente = async (req, res) => {
    const { nome } = req.body;
    const cliente = await Cliente.create({ nome });
    res.json(cliente);
}

//exports.alterarCliente = async (req, res) => {
//    const { id } = req.body;
//    const cliente = awai
//}