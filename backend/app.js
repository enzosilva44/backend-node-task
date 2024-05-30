// app.js
const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use('/users', userRoutes);

// Configuração de CORS para permitir solicitações OPTIONS de qualquer origem
app.options('*', cors());

// Configuração de CORS para permitir solicitações da origem localhost:3000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json()); // Middleware para processar o corpo das requisições

// Definição das rotas de teste de banco de dados
app.get('/test-db', async (req, res) => {
  try {
    await db.query('SELECT NOW()');
    res.send('Database is connected');
  } catch (err) {
    console.error(err);
    res.status(200).send('Database is not connected');
  }
});

// Importação e uso das rotas de usuário e autenticação
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/users', userRoutes); // Use as rotas de usuário definidas em userRoutes
app.use('/api/auth', authRoutes); // Use as rotas de autenticação definidas em authRoutes

// Definição da rota principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
