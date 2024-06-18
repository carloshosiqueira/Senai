const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const hotel = await prisma.hotel.create({
            data
        });
        res.status(201).json(hotel).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const read = async (req, res) => {
    try {
        const hoteis = await prisma.hotel.findMany();
        res.status(200).json(hoteis).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const readByNome = async (req, res) => {
        const { nome } = req.body;
        const hoteis = await prisma.hotel.findMany({
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
        if (hoteis.length > 0) {
            res.status(200).json(hoteis).end();
        } else {
            res.status(404).json({ error: "Hotel não encontrado" }).end();
        }
};

const del = async (req, res) => {
    try {
        const hotel = await prisma.hotel.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        res.status(204).json(hotel).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;

        const hotel = await prisma.hotel.update({
            where: {
                id
            },
            data
        });

        res.status(202).json(hotel).end();
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
