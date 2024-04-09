const con = require('../connect/connection');

// CRUD - CREATE
const addTelefone = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.numero != null) {
        const { matricula, numero,} = req.body;
        con.query('INSERT INTO Telefone (matricula, numero) VALUES (?, ?)', [matricula, numero], (err, result) => {
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
const readTelefones = (req, res) => {
    if (req.params.matricula != null) {
        con.query('SELECT * FROM Telefone WHERE matricula =' + req.params.matricula, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Telefone');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Telefone', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Telefones');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateTelefone = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.numero != null) {
        const { matricula, numero} = req.body;
        con.query('UPDATE Telefone SET numero = ? WHERE matricula = ?', [numero, matricula], (err, result) => {
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
const deleteTelefone = (req, res) => {
    if (req.params != null && req.params.numero != null) {
        const { numero } = req.params;
        con.query('DELETE FROM Telefone WHERE matricula = ?', [numero], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Telefone não encontrado');
                } else {
                    res.status(202).json('Telefone removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addTelefone,
    readTelefones,
    updateTelefone,
    deleteTelefone
}