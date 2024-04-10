const con = require('../connect/connect')

// Create
const addTelefone = (req, res) => {
    if (req.body != null && req.body.cpf != null && req.body.numero!= null) {
        const { cpf, numero } = req.body;
        con.query("INSERT INTO Telefone (cpf, numero) values (?, ?)", [cpf, numero], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json("Por favor, envie todos os dados");
    }
}

// Read

const readTelefone = (req, res) => {
    if (req.params.cpf != null) {
        con.query("SELECT * FROM Telefone WHERE cpf = '" + req.params.cpf + "'", (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar Telefone");
            } else {
                res.status(202).json(result);
            }
        });
    } else {
        con.query('SELECT * FROM Telefone', (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar telefones");
            } else {
                res.status(202).json(result);
            }
        })
    }
}

// Update 
const updateTelefone = (req, res) => {
    if (req.body != null && req.body.telAntigo != null && req.body.telNovo != null) {
        const { telAntigo, telNovo } = req.body;
        con.query("UPDATE Telefone SET numero = ? WHERE numero = ?", [telNovo, telAntigo], (err, result) => {
            if (err) {
                res.status(500).json(err, "Erro ao atualizar dados do Telefone");
            } else {
                res.status(202).json(req.body);
            }
        });
    } else {
        res.status(400).json('Por favor envie todos os dados necessários');
    }
}


const deleteTelefone = (req, res) => {
    if (req.params != null && req.params.numero != null) {
        con.query("Delete FROM Telefone WHERE numero = '" + req.params.numero + "'", (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json("Telefone não encontrado");
                } else {
                    res.status(202).json('Telefone removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json("Por favor, insira o telefone a ser excluído");
    }
}


module.exports = {
    addTelefone,
    readTelefone,
    updateTelefone,
    deleteTelefone
}