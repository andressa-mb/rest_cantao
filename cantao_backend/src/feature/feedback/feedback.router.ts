import express from 'express';
import { createFeedback, getFeedbacks, getFeedbackId, putFeedbackId, deleteFeedbackId } from './feedback.controller';
import {upload} from '../../middlewares/uploadImage';
const router = express.Router();

// Rota para criar feedback
router.post('/feedback', upload.single('img'), createFeedback);

// Rota para listar todos os feedbacks
router.get('/feedback', getFeedbacks);

// Rota para obter um feedback por ID
router.get('/feedback/:id', getFeedbackId);

// Rota para editar/inativar um feedback
router.put('/feedback/:id', putFeedbackId);

// Rota para deletar
router.delete('/feedback/:id', deleteFeedbackId);

router.get("/testup", async(req, res) => {
    res.json("Sucesso2");
  })

export default router;