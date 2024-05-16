const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body

    const turistico = await prisma.pontos_turisticos.create({
        data
    });

    res.status(201).json(turistico).end();
}

const read = async (req, res) => {
    const turisticos = await prisma.pontos_turisticos.findMany()

    res.status(200).json(turisticos).end();
}

const readByName = async (req, res) => {
    const turisticos = await prisma.pontos_turisticos.findUnique({
        where: {
            nome: req.body.nome
        },

        include: {
            hoteis:{
                select: {
                    nome : true,
                    valor : true,
                    avaliacao: true
                }
            },
            destinos :{
                select: {
                    nome: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(turisticos).end()
}

const del = async (req, res) => {
    const turistico = await prisma.pontos_turisticos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(turistico).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const turistico = await prisma.pontos_turisticos.update({
        where:{
            id
        },
        data
    });

    res.status(202).json(turistico).end()
}

module.exports = {
    create,
    read,
    readByName,
    del,
    update
}