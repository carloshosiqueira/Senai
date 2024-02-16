//Dependencias
const con = require("../connect/connect").con;

//Cria um novo item
const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE`;
    query += `('${id}', '${nome}', '${descricao}','${valor}');`;
    con.query(query, (err,result) =>{
        if(err)
            res.status(400).json(err).end();
        else{
            const novo = req.body;
            novo.id = result.insertId;
            res.status(201).json(novo).end();
        }
    });
}

//Mostra os itens
const read = (req, res) => {
    con.query("SELECT * FROM item ORDER BY id desc", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Atualiza um item
const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `UPDATE item SET id = '${id}', nome = '${nome}', descricao = '${descricao}', valor = '${valor}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if(err)
            res.status(400).json(err).end();
        else{
            if(result.affectedrows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Produto Não Encontrado").end();
        }
    })
}

//Deleta um produto
const del = (req, res) =>{
    let id = req.params.id;
    con.query(`DELETE FROM item WHERE id = ${id}`,(err, result) => {
        if(err)
            res.status(400).json(err).end();
        else{
            if(result.affectedrows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Produto não encontrado").end();
        }
    })
}

module.exports = {
    create,
    read,
    update,
    del
};