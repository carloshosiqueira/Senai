const con = require ('../connect/connect').con
const md5 = require('md5');

//Login
const login = (req, res) => {
    if (req.body != null && req.body.email != null && req.body.senha != null) {
        const { email, senha } = req.body;
        const senhaCriptografada = md5(senha);
        con.query('SELECT * FROM Usuario WHERE email = ? AND senha = ?', [email, senhaCriptografada], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao fazer login');
            } else {
                if (result.length > 0) {
                    const { id, nome, email } = result[0];
                    res.status(200).json({id, nome, email});
                } else {
                    res.status(404).json('Usuario ou senha inválidos');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//Create
const addUsuario = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { nome, email, senha } = req.body;
        const senhaCriptografada = md5(senha);
        con.query('INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senhaCriptografada], (err, result) =>{
            if(err){
                res.status(500).json("Erro ao Adicionar Usuario")
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

const getUsuario = (req, res) => {
    if (req.params.id != null){
        con.query("SELECT * from Usuarios WHERE idUsuario = "+ req.params.id, (err,result) =>{
            if(err){
                res.status(500).json("Erro ao listar a Usuario");
            }
            res.json(result);

        });
    } else {
        con.query("SELECT * FROM Usuarios", (err, result) =>{
            if(err){
                res.status(500).json("Erro ao listar as Usuarios");
            }
                res.json(result);
        })
    }
}

//Update 

const updateUsuario = (req, res) => {
    if (req.body != null && req.body.id != null &&req.body.nome != null && req.body.email != null && req.body.senha != null){
       const {id, nome, email, senha} = req.body
       const senhaCriptografada = md5(senha); // Calcula o hash MD5 da nova senha
       con.query('UPDATE Usuarios set nome = ?, email = ?, senha = ? WHERE idUsuario = ?', [nome, email, senhaCriptografada, id], (err, result) => {
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

const deleteUsuario = (req, res) => {
    if(req.params != null && req.params.id != null){
        const {id} = req.params;
        con.query('DELETE FROM Usuarios where idUsuario = ?', [id], (err, result) => {
            if(err){
                res.status(500).json(err);
            } else {
                if(result.affectedRows == 0){
                    res.status(404).json("Usuario não encontradp") 
                } else{
                    res.status(201).json('Usuario excluído com sucesso')
                }
            }
        });
    } else {
        res.status(400).json("Por favor, preencha todas as informações")
    }
}

module.exports = {
    addUsuario,
    getUsuario,
    updateUsuario,
    deleteUsuario,
    login
}