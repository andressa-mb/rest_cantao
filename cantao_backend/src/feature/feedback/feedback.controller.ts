import { Request, Response } from 'express';
import { FeedbackModel } from './feedback.model';

//Criar feedback
export const createFeedback = async (req: Request, res: Response): Promise<void> => {
  const { nome, email, comentario } = req.body;
  let img = req.file ? req.file.path: 'public/default.jpg';

  if (!nome || !email || !comentario) {
    res.status(400).json({ message: 'Os campos nome, email e comentários são obrigatórios' });
    return;
  }

  try {
    const result = await FeedbackModel.createFeedback(nome, email, comentario, img);
    res.status(201).json({ message: 'Feedback criado com sucesso!', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar feedback ' + error });
  }
};

// Obter todos os feedbacks
export const getFeedbacks = async (req: Request, res: Response): Promise<void> => {
 
  try {
    const feedbacks = await FeedbackModel.getAllFeedbacks();
    if (Array.isArray(feedbacks)) {
      feedbacks.forEach((feedback: any) => {
       if (feedback.img) {
          feedback.img = `http://localhost:4000/${feedback.img.replace(/\\/g, "/")}`;
        }
      });
    }
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar feedbacks ' + error });
  }
};

// Obter feedback por ID
export const getFeedbackId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  
  try {
    const idParse = parseInt(id);
    const feedback = await FeedbackModel.getFeedbackById(idParse);
    if (!feedback) {
      res.status(404).json({ message: 'Feedback não encontrado.' });
      return;
    }
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar feedback ' + error });
  }
};

//Atualizar feedback (inativar)
export const putFeedbackId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = req.body;

  try{
    const idParse = parseInt(id);
    const feedback = await FeedbackModel.putFeedbackId(data, idParse);
    if(!feedback){
      res.status(404).json({message: 'Feedback não encontrado.'});
      return;
    }
    res.status(200).json(feedback);
  }catch (error) {
    res.status(500).json({message: 'Erro ao buscar feedback' + error});
  }
}

//Deletar feedback
export const deleteFeedbackId = async (req: Request, res: Response): Promise<void> => {
  const { id }  = req.params;

  try{
    const idParse = parseInt(id);
    const feedback = await FeedbackModel.deleteFeedbackId(idParse);
    if(!feedback){
      res.status(404).json({message: 'Feedback não encontrado.'});
      return;
    }
    res.status(200).json(`Feedback excluído com sucesso.`);
  }catch (error) {
    res.status(500).json({message: 'Erro ao buscar feedback' + error});
  }
}

