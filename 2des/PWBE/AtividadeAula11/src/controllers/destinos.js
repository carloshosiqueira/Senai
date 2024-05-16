const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body

    const destino = await prisma.destinos.create({
        data
    });

    res.status(201).json(destino).end();
}

const read = async (req, res) => {
    const destinos = await prisma.destinos.findMany()

    res.status(200).json(destinos).end();
}

const readByName = async (req, res) => {
    const destinos = await prisma.destinos.findUnique({
        where: {
            nome: req.body.nome
        },
      
        include: {
            ponto_turistico:{
                select:{
                    nome: true,
                    endereci: true,
                    valor: true
                }
            },
            hoteis:{
                select:{
                    nome: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(destinos).end();
}

const del = async (req, res) => {
    const destino = await prisma.destinos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(destino).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const destino = await prisma.destinos.update({
        where:{
            id
        },
        data
    });

    res.status(202).json(destino).end()
}

module.exports = {
    create,
    read,
    readByName,
    del,
    update
}