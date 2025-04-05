const Cliente = require('../Model/clientesModel.js');


exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.render('consultaCliente', { clientes: clientes || [] }); // Passando clientes para o EJS
    } catch (error) {
        console.error('Erro ao listar clientes:', error);
        res.status(500).send('Erro ao carregar a página');
    }
};

exports.adicionarCliente = async (req, res) => {
    const { nome, endereco, telefone, email } = req.body;
    try{
        await Cliente.create({ nome, endereco, telefone, email });
    res.redirect('/api/clientes/novo');
    } catch (error){
        console.error('Erro ao adicionar cliente', error);
        res.status(500).send('Erro ao adicionar cliente');
    }
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
    res.redirect('/api/clientes');
};


exports.excluirCliente = async (req, res) => {
    const { id } = req.params;
    await Cliente.destroy({ where: { id } });
    res.redirect('/api/clientes');
};