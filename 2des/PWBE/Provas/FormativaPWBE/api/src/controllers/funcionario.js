const con = require('../connect/connection');

// CRUD - CREATE
const addFuncionario = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.nome != null) {
        const { matricula, nome,} = req.body;
        con.query('INSERT INTO Funcionario (matricula, nome) VALUES (?, ?)', [matricula, nome], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            } 
            //else {
              //  req.body.id = result.insertId;
               // res.status(201).json(req.body);
          //  }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const readFuncionarios = (req, res) => {
    if (req.params.matricula != null) {
        con.query('SELECT * FROM funcionario WHERE matricula =' + req.params.matricula, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionario');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM funcionario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionarios');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateFuncionario = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.nome != null) {
        const { matricula, nome} = req.body;
        con.query('UPDATE funcionario SET nome = ? WHERE matricula = ?', [nome, matricula], (err, result) => {
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
const deleteFuncionario = (req, res) => {
    if (req.params != null && req.params.matricula != null) {
        const { matricula } = req.params;
        con.query('DELETE FROM funcionario WHERE matricula = ?', [matricula], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Funcionario não encontrado');
                } else {
                    res.status(202).json('Funcionario removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addFuncionario,
    readFuncionarios,
    updateFuncionario,
    deleteFuncionario
}