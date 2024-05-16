const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const data = req.body
    console.log(data)
    const hotel = await prisma.hoteis.create({
        data
    });
    res.status(201).json(hotel).end();
}

const read = async (req, res) => {
    const hoteis = await prisma.hoteis.findMany()

    res.status(200).json(hoteis).end();
}

const readByName = async (req, res) => {
    const hoteis= await prisma.hoteis.findUnique({
        where: {
            nome: req.body.nome
        },

        include: {
            destinos :{
                select: {
                    nome: true,
                    valor: true
                }
            },
            pontos_turisticos:{
                select:{
                    nome: true,
                    endereco: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(hoteis).end()
}

const del = async (req, res) => {
    const hotel = await prisma.hoteis.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(204).json(hotel).end();
}

const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const hotel = await prisma.hoteis.update({
        where:{
            id
        },
        data
    });

    res.status(202).json(hotel).end()
}

module.exports = {
    create,
    read,
    readByName,
    del,
    update
}