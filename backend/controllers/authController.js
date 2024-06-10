const jwt = require('jsonwebtoken');
const { getAllUsersModel } = require('../models/userModel'); // Certifique-se de que o caminho está correto

exports.authenticateUser = async (req, res) => {
  const { email, senha } = req.body;

  // Log para depuração
  console.log(`Email: ${email}, Senha: ${senha}`);

  try {
    const users = await getAllUsersModel();

    // Exibe todos os usuários no console para depuração
    console.log('Usuários:', users);

    // Verifique se o usuário existe e a senha está correta
    const user = users.find(user => user.email === email && user.senha === senha);

    if (user) {
      // Gera um token JWT (lembre-se de configurar uma chave secreta adequada)
      const token = jwt.sign({ email }, 'seu-segredo-jwt', { expiresIn: '1h' });

      // Exibe uma mensagem no console indicando sucesso na autenticação
      console.log('success.auth.login');

      return res.status(200).json({ message: 'success', token });
    } else {
      // Exibe uma mensagem no console indicando falha na autenticação
      console.log('error.auth.login');

      return res.status(401).json({ message: 'error.auth.login' });
    }
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    return res.status(500).json({ message: 'error.server' });
  }
};
