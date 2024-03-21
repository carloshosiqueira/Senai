const con = require ('../connect/connect').con

//Create
const addTarefa = (req, res) => {
    if (req.body != null && req.body.descricao != null && req.body.dataDeVencimento != null && req.body.Status != null && req.body.idUsuario != null) {
        const { descricao, dataDeVencimento, Status, idUsuario } = req.body;
        con.query('INSERT INTO Tarefas (descricao, dataDeVencimento, Status, idUsuario) VALUES (?, ?, ?, ?)', [descricao, dataDeVencimento, Status, idUsuario], (err, result) =>{
            if(err){
                res.status(500).json("Erro ao Adicionar tarefa")
            }
            else{
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Por favor, preencha todas as informações');
    }
}

//Read

const getTarefa = (req, res) => {
    if (req.params.id != null){
        con.query("SELECT * from Tarefas WHERE idTarefa = "+ req.params.id, (err,result) =>{
            if(err){
                res.status(500).json("Erro ao listar a tarefa");
            }
            res.json(result);

        });
    } else {
        con.query("SELECT * FROM Tarefas", (err, result) =>{
            if(err){
                res.status(500).json("Erro ao listar as tarefas");
            }
                res.json(result);
        })
    }
}

//Update 

const updateTarefa = (req, res) => {
     if (req.body != null && req.body.id != null && req.body.descricao != null && req.body.dataDeVencimento != null && req.body.Status != null && req.body.idUsuario != null){
        const {id, descricao, dataDeVencimento, Status, idUsuario} = req.body
        con.query('UPDATE Tarefas set descricao = ?, dataDeVencimento = ?, Status = ?, idUsuario = ? WHERE idTarefa = ?', [descricao, dataDeVencimento, Status, idUsuario, id], (err, result) => {
            if(err){
                res.status(500).json(err);
            } else {
                res.status(202).json(req.body);
            }
        });
     } else {
        res.status(400).json('Por favor, preencha todas as informações');
     }
}

// Delete

const deleteTarefa = (req, res) => {
    if(req.params != null && req.params.id != null){
        const {id} = req.params;
        con.query('DELETE FROM Tarefas where idTarefa = ?', [id], (err, result) => {
            if(err){
                res.status(500).json(err);
            } else {
                if(result.affectedRows == 0){
                    res.status(404).json("Tarefa não encontrada")
                } else{
                    res.status(201).json('Tarefa excluída com sucesso')
                }
            }
        });
    } else {
        res.status(400).json("Por favor, preencha todas as informações")
    }
}

module.exports = {
    addTarefa,
    getTarefa,
    updateTarefa,
    deleteTarefa
}