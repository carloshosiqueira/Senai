const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const alunos = await prisma.aluno.findMany({});
    res.render('aluno', { alunos: alunos });
}

module.exports = {
    iniciar
}