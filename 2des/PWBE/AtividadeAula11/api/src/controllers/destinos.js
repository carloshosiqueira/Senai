const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const destino = await prisma.destino.create({
            data
        });

        res.status(201).json(destino).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const destinos = await prisma.destino.findMany();
        res.status(200).json(destinos).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const readByNome = async (req, res) => {
    const { nome } = req.body;
    const destinos = await prisma.destino.findMany({
        where: {
            cidade: nome
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

    if (destinos.length > 0) {
        res.status(200).json(destinos).end();
    } else {
        res.status(404).json({ error: "Destino não encontrado" }).end();
    }
};

const del = async (req, res) => {
    try {
        const destino = await prisma.destino.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        res.status(204).json(destino).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;

        const destino = await prisma.destino.update({
            where: {
                id
            },
            data
        });

        res.status(202).json(destino).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

module.exports = {
    create,
    read,
    readByNome,
    del,
    update
};
