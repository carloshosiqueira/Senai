const con = require ('../connect/connect')

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
        res.status(400).json('Por favor, coloque todas as informações');
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