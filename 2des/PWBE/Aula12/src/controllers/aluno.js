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

// const edit = async (req, res) => {
//     const id = req.params.id;
//     const aluno = await prisma.aluno.findUnique({ where: { id } });
//     res.render('aluno-edit', { aluno });
// }

// const update = async (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     data.nascimento = new Date(data.nascimento);
//     data.idTurma = parseInt(data.idTurma);
//     await prisma.aluno.update({ where: { id }, data });
//     res.redirect('/aluno');
// }

module.exports = {
    iniciar,
    create,
    // edit,
    // update
}
