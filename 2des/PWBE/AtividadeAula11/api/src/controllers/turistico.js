const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body

    const turistico = await prisma.PontosTuristicos.create({
        data
    });

    res.status(201).json(turistico).end();
}

const read = async (req, res) => {
    const turisticos = await prisma.PontosTuristicos.findMany()

    res.status(200).json(turisticos).end();
}

const readByNome = async (req, res) => {
    const turisticos = await prisma.PontosTuristicos.findUnique({
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
            destino :{
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
    const turistico = await prisma.PontosTuristicos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(turistico).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const turistico = await prisma.PontosTuristicos.update({
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
    readByNome,
    del,
    update
}