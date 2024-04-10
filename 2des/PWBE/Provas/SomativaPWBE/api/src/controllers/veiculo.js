const con = require('../connect/connect')

// Create
const addVeiculo = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.marca != null && req.body.tipo != null && req.body.diaria != null) {
        const { placa, modelo, marca, tipo, diaria } = req.body;
        con.query("INSERT INTO Veiculo (placa, modelo, marca, tipo, diaria) values (?, ?, ?, ?, ?)", [placa, modelo, marca, tipo, diaria], (err, result) => {
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

const readVeiculo = (req, res) => {
    if (req.params.placa != null) {
        con.query("SELECT * FROM Veiculo WHERE placa = '" + req.params.placa + "'", (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar veiculo");
            } else {
                res.status(202).json(result);
            }
        });
    } else {
        con.query('SELECT * FROM Veiculo', (err, result) => {
            if (err) {
                res.status(500).json("Erro ao listar veiculo");
            } else {
                res.status(202).json(result);
            }
        })
    }
}

// Update 
const updateVeiculo = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.marca != null && req.body.tipo != null && req.body.diaria != null) {
        const { placa, modelo, marca, tipo, diaria } = req.body;
        con.query("Update Veiculo set modelo = ?, marca = ?, tipo = ?, diaria = ? WHERE placa = ?", [modelo, marca, tipo, diaria, placa], (err, result) => {
            if (err) {
                res.status(500).json(err, "Erro ao atualizar dados do veiculo");
            } else {
                res.status(202).json(req.body)
            }
        });
    } else {
        res.status(400).json('Por favor envie todos os dados')
    }
}

const deleteVeiculo = (req, res) => {
    if (req.params != null && req.params.placa != null) {
        con.query("Delete FROM Veiculo WHERE placa = '" + req.params.placa + "'", (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json("Veiculo não encontrado");
                } else {
                    res.status(202).json('Veiculo removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json("Por favor, insira a placa do veiculo a ser excluído");
    }
}


module.exports = {
    addVeiculo,
    readVeiculo,
    updateVeiculo,
    deleteVeiculo
}