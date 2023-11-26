import { Router } from 'express'
import controller from '../controllers/user.js';

const router = Router();

// Rota para criar um usuário
router.post('/users', controller.create); // FUNCIONANDO

// Rota para realizar o login
router.post('/login', controller.login);

// Rota para buscar todos os usuários
router.get('/users', controller.findAll); // FUNCIONANDO

// Rota para buscar apenas um usuário específico
router.get('/users/:id', controller.findOne); // FUNCIONANDO

// Rota para atualizar informações do perfil de um usuário específico
router.put('/:id', controller.update);

// Rota para deletar apenas um usuário específico
router.delete('/:id', controller.delete);

export default router;