const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const destino = await prisma.Destino.create({
        data
    });

    res.status(201).json(destino).end();
};

const read = async (req, res) => {
    const destinos = await prisma.Destino.findMany();
    res.status(200).json(destinos).end();
};

const readByNome = async (req, res) => {
    const { nome } = req.body;
    const destino = await prisma.Destino.findUnique({
        where: {
            nome: nome
        },
        include: {
            pontosTuristicos: {
                select: {
                    nome: true,
                    endereco: true,
                    valor: true
                }
            },
            hoteis: {
                select: {
                    nome: true,
                    valor: true
                }
            }
        }
    });

    if (destino) {
        res.status(200).json(destino).end();
    } else {
        res.status(404).json({ error: "Destino não encontrado" }).end();
    }
};

const del = async (req, res) => {
    const destino = await prisma.Destino.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(destino).end();
};

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const destino = await prisma.Destino.update({
        where: {
            id
        },
        data
    });

    res.status(202).json(destino).end();
};

module.exports = {
    create,
    read,
    readByNome,
    del,
    update
};
