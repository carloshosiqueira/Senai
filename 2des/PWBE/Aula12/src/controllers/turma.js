const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    const turmas = await prisma.turma.findMany({});
    res.render('index', { turmas: turmas });
}

const create = async (req, res) => {
    const data = req.body
    const turma = await prisma.turma.create({
        data
    });
    res.redirect('/');
}

// function addProfessorToTurma() {
//     const select = document.querySelector('select[name="professor"]');
//     const professorId = select.value;
//     const turmaId = currentTurmaID;
//     // fazer uma requisição para adicionar o professor à turma
//     fetch(`/turma/${turmaId}/add-professor`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ professorId })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// }

module.exports = {
    iniciar,
    create,
    // addProfessorToTurma
}