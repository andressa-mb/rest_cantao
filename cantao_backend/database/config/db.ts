import mysql from "mysql2/promise";
import dotenv from "dotenv";
import {criarTabela} from './createTable';

dotenv.config();

const conexao = mysql.createPool({
  uri: process.env.DATABASE_URL as string,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/* const startConexao = async () => {
  try {
    const connection = await conexao.getConnection();
    console.log("✅ Conectado ao banco de dados MySQL!");
    //await criarTabela();
    connection.release(); // Libera a conexão para o pool
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", (error as Error).message);
    //process.exit(1); // Finaliza a aplicação em caso de erro
  }
}; */

// Exportar a conexão para ser usada nas rotas
export {conexao};
