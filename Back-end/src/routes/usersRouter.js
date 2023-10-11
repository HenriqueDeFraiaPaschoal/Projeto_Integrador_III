import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

// Rota para recuperar informações de um usuário específico
router.get('/:id', UserController.getUserById);

// Rota para atualizar informações do perfil do usuário
router.put('/:id', UserController.updateUserProfile);

export default router;