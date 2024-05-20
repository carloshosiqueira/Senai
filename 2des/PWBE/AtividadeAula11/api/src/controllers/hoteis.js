// controllers/hoteis.js
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body
    const hotel = await prisma.Hoteis.create({
        data
    });
    res.status(201).json(hotel).end();
}

const read = async (req, res) => {
    const hoteis = await prisma.Hoteis.findMany()
    res.status(200).json(hoteis).end();
}

const readByNome = async (req, res) => {
    const hotel = await prisma.Hoteis.findUnique({
        where: {
            nome: req.body.nome,
        }, 
        include: {
            destino: {
                select: {
                    nome: true,
                    valor: true
                }
           },
        }
    });
    res.status(200).json(hotel).end()
}

const del = async (req, res) => {
    const hotel = await prisma.Hoteis.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(hotel).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const hotel = await prisma.Hoteis.update({
        where: {
            id
        },
        data
    });

    res.status(202).json(hotel).end()
}

module.exports = {
    create,
    read,
    readByNome,
    del,
    update
}
