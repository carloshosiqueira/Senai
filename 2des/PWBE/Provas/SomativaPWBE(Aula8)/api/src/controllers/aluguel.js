const con = require('../connect/connect')

// Create
const addAluguel = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.cpf != null && req.body.reserva != null && req.body.retirada != null && req.body.devolucao != null && req.body.subtotal != null) {
        const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
        con.query("INSERT INTO Aluguel (placa, cpf, reserva, retirada, devolucao, subtotal) values (?, ?, ?, ?, ?, ?)", [placa, cpf, reserva, retirada, devolucao, subtotal], (err, result) => {
            if (err) {
                res.json(err);
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json("Por favor, envie todos os dados");
    }
}

// Read

const readAluguel = (req, res) => {
    if(req.params != null && req.params.id != null){
        con.query('SELECT * FROM vw_todos_os_alugueis_com_status WHERE id = ' + req.params.id, (err, result)=>{
            if(err){
                res.status(500).json("Erro ao mostrar o aluguel selecionado");
            } else {
                res.status(202).json(result);
            }
        });
    } else {
        con.query('SELECT * FROM vw_todos_os_alugueis_com_status', (err, result) => {
            if(err){
                res.status(500).json("Erro ao mostrar todos os alugueis");
            } else {
                res.status(202).json(result)
            }
        });
    }
}

const readReservados = (req, res) => {
    con.query('SELECT * FROM vw_alugueis_reservados', (err, result) => {
        if(err){
            res.status(500).json("Erro ao mostrar os veiculos reservados");
        } else {
            res.status(202).json(result)
        }
    });
}

const readAlugados = (req, res) => {
    con.query('SELECT * FROM vw_alugueis_em_andamento', (err, result) => {
        if(err){
            res.status(500).json("Erro ao mostrar os veiculos alugados");
        } else {
            res.status(202).json(result)
        }
    });
}

// Update 
const updateAluguel = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.placa != null && req.body.cpf != null && req.body.reserva != null && req.body.retirada != null && req.body.devolucao != null && req.body.subtotal != null) {
        const { placa, cpf, reserva, retirada, devolucao, subtotal, id } = req.body;
        con.query("Update aluguel set placa = ?, cpf = ?, reserva = ?, retirada = ?, devolucao = ?, subtotal = ? WHERE id = ?", [placa, cpf, reserva, retirada, devolucao, subtotal, id], (err, result) => {
            if (err) {
                res.status(500).json(err, "Erro ao atualizar dados do aluguel");
            } else {
                res.status(202).json(req.body)
            }
        });
    } else {
        res.status(400).json('Por favor envie todos os dados')
    }
}

const deleteAluguel = (req, res) => {
    if (req.params != null && req.params.id != null) {
        con.query("Delete FROM aluguel WHERE id = " + req.params.id, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json("Aluguel não encontrado");
                } else {
                    res.status(202).json('Aluguel removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json("Por favor, o id do aluguel a ser excluído");
    }
}


module.exports = {
    addAluguel,
    readAluguel,
    readReservados,
    readAlugados,
    updateAluguel,
    deleteAluguel
}