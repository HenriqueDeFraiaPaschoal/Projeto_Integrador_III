import prisma from '../database/client.js';

const controller = {};

controller.findAll = async function (req, res) {
  try {
    // Fetch all user information from the database using Prisma
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
},

  controller.create = async function (req, res) {
    try {
      const { id } = req.params;

      // Fetch user information from the database using Prisma
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Error retrieving user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  controller.update = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      // Update user profile in the database using Prisma
      const updatedUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
        },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

export default controller;
