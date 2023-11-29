import prisma from '../database/client.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    let hasUser = false;
    const result = await prisma.users.findMany({
      orderBy: [
        { username: 'asc' },
      ]
    });

    for (let usr of result) {
      if (usr.username === req.body.username || usr.email === req.body.email) {
        hasUser = true;
        break;
      }
    }

    if (req.body.email && req.body.username && req.body.senha && !hasUser) {
      await prisma.users.create({ data: req.body });
      res.status(201).end();
    } else {
      if (hasUser) {
        res.status(400).send({ message: "Usuário ou e-mail já existente" });
      } else {
        res.status(400).send({ message: "Campos inválidos" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

controller.login = async function (req, res) {
  try {
    const { user, password } = req.body;
    console.log('Received login request:', { user, password });

    // Verificar se as credenciais são válidas
    if (!user || !password) {
      console.log('Login failed. Credenciais em branco.');
      return res
        .status(400)
        .send({ message: 'Usuário e senha são obrigatórios.' });
    }

    const result = await prisma.users.findFirst({
      where: {
        OR: [
          { username: user },
          { email: user },
        ],
      },
    });

    if (result && result.senha === password) {
      // Retorna o ID e o nome do usuário junto com a resposta
      const userId = user.id;
      const username = user.username;
      console.log('Login successful:', result);
      console.log(userId, username);
      res.status(200).json(result);

    } else {
      console.log('Login failed. Invalid credentials.');
      res
        .status(401)
        .send({ message: 'Credenciais inválidas ou usuário não encontrado.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: 'Erro ao realizar o login' });
  }
};

controller.findAll = async function(req, res) {
  try {
    const result = await prisma.users.findMany({
      orderBy: [
        { username: 'asc' },  // Ordem ascendente
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
    // console.log(req.user)
    // const allowed = false
    // const results = await prisma.users.findMany({
    //   orderBy: [
    //     { username: 'asc' },  // Ordem ascendente
    //   ]
    // })
    // for (let usr of results) {
    //   if (usr.username == req.body.username || usr.email == req.body.email ) {
    //     hasUser = true
    //   }
    // }
    const result = await prisma.users.findUnique({
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
    const result = await prisma.users.update({
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
    const result = await prisma.users.delete({
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