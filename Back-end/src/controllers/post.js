import prisma from "../database/client.js";

const controller = {};

controller.create = async function (req, res) {
  try {
    await prisma.post.create({ data: req.body });
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.findAll = async function (req, res) {
  try {
    const result = await prisma.post.findMany({
      orderBy: [
        { postDate: "asc" }, // Ordem ascendente
      ],
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.findOne = async function (req, res) {
  try {
    const result = await prisma.post.findUnique({
      where: { id: req.params.id },
    });

    if (result) res.send(result);
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.update = async function (req, res) {
  try {
    const result = await prisma.post.update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.delete = async function (req, res) {
  try {
    const result = await prisma.post.delete({
      where: { id: req.params.id },
    });

    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default controller;
