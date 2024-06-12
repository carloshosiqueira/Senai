const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const alunos = await prisma.aluno.findMany({});
    res.render('aluno', { alunos: alunos });
}

const create = async (req, res) => {
    const data = req.body;
    data.nascimento = new Date(data.nascimento);
    data.idTurma = parseInt(data.idTurma);
    const aluno = await prisma.aluno.create({data});
    res.redirect('/aluno');
}

module.exports = {
    iniciar,
    create
}