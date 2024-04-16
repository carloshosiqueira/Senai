const con = require('../connect/connect')

//Create
const addCliente = (req, res) => {
    const { cpf, nome_cliente, telefone } = req.body;
    if (telefone == null) {
        con.query("INSERT INTO Cliente (cpf, nome_cliente) VALUES (?,?)", [cpf, nome_cliente], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY")
                    res.status(400).json("Cpf já cadastrado");
                else
                    res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        con.query("INSERT INTO Cliente (cpf, nome_cliente) VALUES (?,?)", [cpf, nome_cliente], (err, result) => {
            if (err) {
                if (err.code == "ER_DUP_ENTRY")
                    res.status(400).json("Cpf já cadastrado");
                else
                    res.status(500).json(err);
            }
        });
        con.query("INSERT INTO Telefone (cpf, numero) VALUES (?,?)", [cpf, telefone], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    }
}


// Read

const readCliente = (req, res) => {
    if (req.params.cpf != null) {
        con.query("SELECT * FROM Cliente WHERE cpf = '" + req.params.cpf + "'", (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar cliente");
            } else {
                res.status(202).json(result);
            }
        });
    } else {
        con.query('SELECT * FROM Cliente', (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar clientes");
            } else {
                res.status(202).json(result);
            }
        })
    }
}

// Update 
const updateCliente = (req, res) => {
    if (req.body != null && req.body.cpf != null && req.body.nome_cliente != null) {
        const { nome_cliente, cpf } = req.body;
        con.query("Update Cliente set nome_cliente = ? WHERE cpf = ?", [nome_cliente, cpf], (err, result) => {
            if (err) {
                res.status(500).json(err, "Erro ao atualizar dados do cliente");
            } else {
                res.status(202).json(req.body)
            }
        });
    } else {
        res.status(400).json('Por favor envie todos os dados')
    }
}

const deleteCliente = (req, res) => {
    if (req.params != null && req.params.cpf != null) {
        con.query("Delete FROM Cliente WHERE cpf = '" + req.params.cpf + "'", (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json("Cliente não encontrado");
                } else {
                    res.status(202).json('Cliente removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json("Por favor, insira o cpf do cliente a ser excluído");
    }
}


module.exports = {
    addCliente,
    readCliente,
    updateCliente,
    deleteCliente
}