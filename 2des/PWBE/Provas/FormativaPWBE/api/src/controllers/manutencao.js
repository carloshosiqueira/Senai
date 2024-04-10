const con = require('../connect/connection');

// CRUD - CREATE
const addManutencao = (req, res) => {
    if (req.body != null && req.body.placa!= null && req.body.matricula != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null) {
        const {placa, matricula, inicio, fim, descricao} = req.body;
        con.query('INSERT INTO Manutencao (placa, matricula, inicio, fim, descricao) VALUES (?, ?, ?, ?, ?)', [placa, matricula, inicio, fim, descricao], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            } 

        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const readManutencoes = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM Manutencao WHERE id=' + req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar manutenção');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Manutencao', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Manutenções');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateManutencao = (req, res) => {
    if (req.body != null && req.body.placa!= null && req.body.matricula != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null) {
        const {id, placa, matricula, inicio, fim, descricao} = req.body;
        con.query('UPDATE Manutencao SET placa = ?, matricula = ?, inicio = ?, fim = ?, descricao = ? WHERE id = ?', [placa, matricula, inicio, fim , descricao, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(202).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

// //CRUD - DELETE
const deleteManutencao = (req, res) => {
    if (req.params != null && req.params.id!= null) {
        const {id} = req.params;
        con.query('DELETE FROM Manutencao WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Manutencao não encontrado');
                } else {
                    res.status(202).json('Manutencao removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addManutencao,
    readManutencoes,
    updateManutencao,
    deleteManutencao
}