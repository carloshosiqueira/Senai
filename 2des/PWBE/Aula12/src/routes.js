const express = require('express')
const router = express.Router()

const turma = require('./controllers/turma')
const aluno = require('./controllers/aluno')
const professor = require('./controllers/professor')

router.get('/', turma.iniciar)
router.post('/turma', turma.create)
// router.post('/turma/:turmaId/add-professor', turma.addProfessorToTurma)
router.get('/aluno', aluno.iniciar)
router.post('/aluno', aluno.create)
router.get('/professor', professor.iniciar)
router.post('/professor', professor.create)
// router.post('/professor/delete', professor.del)

module.exports = router