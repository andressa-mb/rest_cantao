import { conexao } from '../../../database/config/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// Definição do modelo para Feedback
export const FeedbackModel = {
  createFeedback: async (nome: string, email: string, comentario: string, img: string = 'default.jpg', ativo: boolean = true) => {
    const query = `INSERT INTO feedback (nome, email, comentario, img, ativo) VALUES (?, ?, ?, ?, ?)`;
    try{
      const [result] = await conexao.execute<ResultSetHeader>(query, [nome, email, comentario, img, ativo]);

      return {id: result.insertId, nome, email, comentario, img, ativo};
    }catch(err){
      throw new Error (`Erro ao inserir feedback ${(err as Error).message}`)
    }
  },

  getAllFeedbacks: async() => {
    const query = `SELECT * FROM feedback ORDER BY criado_em DESC`;
    try{
      const [rows] = await conexao.execute(query);
      return rows;
    }catch(err){
      throw new Error (`Erro ao listar feedbacks ${(err as Error).message}`);
    }
  },

  getFeedbackById: async(id: number) => {
    const query = `SELECT * FROM feedback WHERE id = ? `;
    try{
      const [row] = await conexao.execute(query, [id]);
      if (!row || (Array.isArray(row) && row.length === 0)) {
        return null;
      }
      return row;
    }catch(err){
      throw new Error (`Erro ao encontrar o feedback por ID. ${(err as Error).message} `);
    }
  },

  putFeedbackId: async(data: { nome?: string; email?: string; comentario?: string; img?: string; ativo?: boolean }, id: number) => {
    const feedbackQuery = `SELECT * FROM feedback WHERE id = ?`;
    const [rows] = await conexao.execute<RowDataPacket[]>(feedbackQuery, [id]);
    if(rows.length === 0){
      throw new Error("Feedback não encontrado.");
    }

    let feedback = rows[0];
    let nome = data.nome ?? feedback.nome;
    let email = data.email ?? feedback.email;
    let comentario = data.comentario ?? feedback.comentario;
    let img = data.img ?? feedback.img;
    let ativo = data.ativo ?? feedback.ativo;

    const query = `UPDATE feedback SET nome = ?, email = ?, comentario = ?, img = ?, ativo = ? WHERE id = ?`;
    try {
      await conexao.execute(query, [nome, email, comentario, img, ativo, id]);
      return { id, nome, email, comentario, img, ativo };
    } catch (err) {
      throw new Error(`Erro ao atualizar o feedback. ${(err as Error).message}`);
    }
  },

  deleteFeedbackId: async(id: number) => {
    const query = `DELETE FROM feedback WHERE id = ?`;
    try {
      const [row] = await conexao.execute<ResultSetHeader>(query, [id]);
      if (row.affectedRows === 0) {
        throw new Error("Feedback não encontrado.");
      }
      return {message: "Feedback excluído com sucesso."};
    } catch (err) {
      throw new Error (`Erro ao deletar o feedback. ${(err as Error).message}`);
    }
  }

}
