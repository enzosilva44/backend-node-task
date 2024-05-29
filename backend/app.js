const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors()); // Habilita o CORS para todas as rotas
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
