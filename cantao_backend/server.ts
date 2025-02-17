import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./src/feature/feedback/feedback.router";
import { conexao } from "./database/config/db";

const app = express();
const port = 4000; 

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Permite ler JSON nos POSTs
app.use('/public', express.static('public'));

// Rotas
app.use("/feedbacks", feedbackRoutes);

const startServer = async () => {
    try {
        const connection = await conexao.getConnection();
        console.log('✅ Banco de dados conectado com sucesso!');

        // Libere a conexão de volta ao pool
        connection.release();
        
        await app.listen(port, () => {
        console.log(`🚀 Servidor rodando na porta http://localhost:${port}`);
      });
    } catch (error) {
      console.error(`Erro ao tentar iniciar o servidor: ${error}`);
      process.exit(1)
    }
};
  
startServer();
