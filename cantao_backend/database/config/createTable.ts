import {conexao} from './db';

async function criarTabela() {
    const query = `
    CREATE TABLE IF NOT EXISTS feedback (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        comentario TEXT NOT NULL,
        img VARCHAR(255) DEFAULT 'avatar.jpg',
        ativo BOOLEAN DEFAULT TRUE,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

    try {
        await conexao.query(query);
        console.log('Tabela feedback criada ou já existe!');
    } catch (error) {
        console.error('Erro ao criar a tabela:', error);
    } finally {
        process.exit(); // Finaliza o processo após a execução
    }
}

export {criarTabela};