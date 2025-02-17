import { conexao } from "../config/db";

const seedFeedback = async () => {
  try {
    const conn = await conexao.getConnection();

    const seedQuery = `
      INSERT INTO feedback (nome, email, comentario, img) VALUES
      ('Andressa', 'andressa@email.com', 'Ótimo restaurante, acolhedor!', 'andressa.jpg'),
      ('João', 'joao@email.com', 'Gostei muito!', 'joao.jpg'),
      ('Maria', 'maria@email.com', 'Precisa de algumas melhorias.', 'default.jpg');
    `;

    await conn.query(seedQuery); // Executa o INSERT
    console.log("✅ Dados iniciais inseridos com sucesso!");

    conn.release(); // Libera a conexão do pool
  } catch (error) {
    console.error("❌ Erro ao inserir dados:", (error as Error).message);
  }
};

// Executar a seed
seedFeedback();