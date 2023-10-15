import prisma from '../database/client.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    await prisma.Usuario.create({data: req.body})
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.findAll = async function(req, res) {
  try {
    const result = await prisma.Usuario.findMany({
      orderBy: [
        { userName: 'asc' },  // Ordem ascendente
      ]
    })
    res.send(result)
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.findOne = async function(req, res) {
  try {
    const result = await prisma.Usuario.findUnique({
      where: { id: req.params.id }
    })

    if(result) res.send(result)

    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.update = async function(req, res) {
  try {
    const result = await prisma.Usuario.update({
      where: { id: req.params.id },
      data: req.body
    })

    if(result) res.status(204).end()

    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

controller.delete = async function(req, res) {
  try {
    const result = await prisma.Usuario.delete({
      where: { id: req.params.id }
    })

    if(result) res.status(204).end()

    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).send(error)
  }
}

export default controller;