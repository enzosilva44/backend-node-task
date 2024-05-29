const express = require('express');
const app = express();
const cors = require('cors');

// Configuração de CORS para permitir solicitações OPTIONS de qualquer origem
app.options('*', cors());

// Configuração de CORS para permitir solicitações da origem localhost:3000
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/api');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json()); // Middleware para processar o corpo das requisições

// Configuração das rotas
app.use('/api/users', userRoutes); // Use as rotas de usuário definidas em userRoutes
app.use('/api/auth', authRoutes); // Use as rotas de autenticação definidas em authRoutes

// Definição das rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
