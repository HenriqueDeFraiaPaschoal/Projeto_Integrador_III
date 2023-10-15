import { Router } from 'express'
import controller from '../controllers/post.js';

const router = Router();

// Rota para criar um post
router.post('/', controller.create);

// Rota para buscar todos os posts
router.get('/posts', controller.findAll);

// Rota para buscar apenas um post específico
router.get('/:id', controller.findOne);

// Rota para atualizar informações de um post específico
router.put('/:id', controller.update);

// Rota para deletar apenas um post específico
router.delete('/:id', controller.delete);

export default router;