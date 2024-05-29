const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res) => {
  const { email, senha } = req.body;

  // Log para depuração
  console.log(`Email: ${email}, Senha: ${senha}`);

  // Para fins de demonstração, estamos usando uma senha e e-mail fixos.
  // Em um cenário real, você deve verificar os dados com um banco de dados.
  if (email === 'teste' && senha === 'teste') {
    // Gera um token JWT (lembre-se de configurar uma chave secreta adequada)
    const token = jwt.sign({ email }, 'seu-segredo-jwt', { expiresIn: '1h' });

    // Exibe uma mensagem no console indicando sucesso na autenticação
    console.log('success.auth.login');

    res.status(200).json({ message: 'success', token });
    res.status(200).json({ message: 'success', token });

  } else {
    // Exibe uma mensagem no console indicando falha na autenticação
    console.log('error.auth.login');

    res.status(401).json({ message: 'error.auth.login' });
  }
};
