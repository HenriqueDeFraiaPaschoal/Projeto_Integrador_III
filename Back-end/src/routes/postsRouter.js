import express from 'express';
import PostController from '../controllers/postController.js';

const router = express.Router();

// Rota para fazer upload de código
router.post('/upload', PostController.uploadCode);

// Rota para avaliar e comentar sobre o código de outros alunos
router.post('/:codeId/review', PostController.reviewCode);

// Rota para listar códigos disponíveis na plataforma
router.get('/', PostController.listCodes);

export default router;