const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const professores = await prisma.professor.findMany({});
    res.render('professor', { professores: professores });
}

const create = async (req, res) => {
    const data = req.body
    const idTurma = parseInt(data.idTurma);
    console.log(data);

    const professor = await prisma.professor.create({
        data: {
            nome: data.nome,
            especialidade: data.especialidade,
            turmas: {
                create: {
                    turma: { connect: { id: idTurma } }
                }
            }
        }
    });
    res.redirect('/professor');
}


module.exports = {
    iniciar,
    create
}