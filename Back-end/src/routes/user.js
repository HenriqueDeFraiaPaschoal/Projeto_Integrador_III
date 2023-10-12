import { Router } from 'express'
import controller from '../controllers/user.js';

const router = Router();

// Rota para recuperar informações de um usuário específico
router.get('/users', controller.findAll)

// Rota para atualizar informações do perfil do usuário
router.put('/:id', controller.update);

export default router;