import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});




// Rota para verificar se o usuário já está cadastrado
app.post('/login', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      res.status(200).send('Usuário já cadastrado');
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});




// Rota para cadastrar um novo usuário
app.post('/registeruser', async (req, res) => {
  const { nome, email, password } = req.body;

  try {
    // Verifica se o usuário já está cadastrado
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userCheck.rows.length > 0) {
      return res.status(400).send('Usuário já cadastrado');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere o novo usuário no banco de dados
    const result = await pool.query(
      'INSERT INTO users (nome, email, password) VALUES ($1, $2, $3) RETURNING *',
      [nome, email, hashedPassword]
    );

    res.status(201).send(`Usuário cadastrado com sucesso: ${result.rows[0].nome}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});





// Inicia o servidor na porta 3001
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
