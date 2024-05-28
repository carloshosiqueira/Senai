const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const professores = await prisma.professor.findMany({});
    res.render('professor', { professores: professores });
}

module.exports = {
    iniciar
}