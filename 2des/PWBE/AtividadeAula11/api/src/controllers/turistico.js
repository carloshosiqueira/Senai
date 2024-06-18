const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const turistico = await prisma.pontoTuristico.create({
            data
        });

        res.status(201).json(turistico).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const turisticos = await prisma.pontoTuristico.findMany();
        res.status(200).json(turisticos).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const readByNome = async (req, res) => {
        const { nome } = req.body;
        const turisticos = await prisma.pontoTuristico.findMany({
            where: {
                nome: nome
            },
            include: {
                destino: {
                    select: {
                        cidade: true,
                        valor: true
                    }
                }
            }
        });

        if (turisticos.length > 0) {
            res.status(200).json(turisticos).end();
        } else {
            res.status(404).json({ error: "Ponto turístico não encontrado" }).end();
        }
};

const del = async (req, res) => {
    try {
        const turistico = await prisma.pontoTuristico.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        res.status(204).json(turistico).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;

        const turistico = await prisma.pontoTuristico.update({
            where: {
                id
            },
            data
        });

        res.status(202).json(turistico).end();
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
