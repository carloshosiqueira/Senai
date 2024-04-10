const con = require('../connect/connection');

const readVeiculos = (req, res) => {
    const sql = "SELECT * FROM veiculo";
    con.query(sql, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const readVeiculo = (req, res) => {
    const sql = "SELECT * FROM veiculo WHERE placa LIKE ?";
    con.query(sql,`%${[req.params.placa]}%`, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
}

const addVeiculo = (req, res) => {
    const sql = "INSERT INTO veiculo (placa, modelo, marca, ano) VALUE (?, ?, ?, ?)"
    con.query(sql, [req.body.placa, req.body.modelo, req.body.marca, req.body.ano], (err, result)=>{
        if(err){
            res.json(err);
        } else {
            res.status(201).json(req.body);
        }
    })
}

const updateVeiculo = (req, res) => {
    const sql =  ('UPDATE veiculo SET modelo = ?, marca = ?, ano = ? WHERE placa = ?')
    con.query(sql,[req.body.modelo, req.body.marca, req.body.ano, req.body.placa], (err, result)=>{
        if(err){
            res.json(err);
        } else {
            res.status(202).json(req.body);
        }
    })
}

const deleteVeiculo = (req, res) => {
    if (req.params != null && req.params.placa != null) {
        const { placa } = req.params;
        con.query('DELETE FROM veiculo WHERE placa = ?', [placa], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Veiculo não encontrado');
                } else {
                    res.status(204).json('Veiculo removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

module.exports = {
    readVeiculos,
    readVeiculo,
    addVeiculo,
    updateVeiculo,
    deleteVeiculo
}