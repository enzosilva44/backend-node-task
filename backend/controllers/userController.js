exports.getUser = (req, res) => {
  // Obter o ID do parâmetro da URL
  const userId = req.params.id;

  // Definir os dados do usuário baseado no ID
  let user = {};
  if (userId === '4') {
    user = {
      id: userId,
      username: 'john',
      email: 'john@example.com'
    };
  } else if (userId === '5') {
    user = {
      id: userId,
      username: 'maria',
      email: 'maria@example.com'
    };
  } else {
    user = {
      id: userId,
      username: 'unknown',
      email: 'unknown@example.com'
    };
  }

  // Enviar os dados do usuário como resposta
  res.json({ user });
};

// exports.loginUser = (req, res) => {
//   const { username, password } = req.body;

//   // Usuário e senha de teste
//   const testUser = {
//     username: 'teste',
//     password: 'senha'
//   };

//   // Verificar se as credenciais estão corretas
//   if (username === testUser.username && password === testUser.password) {
//     res.status(200).json({ message: 'Login bem-sucedido' });
//   } else {
//     res.status(401).json({ message: 'Credenciais inválidas' });
//   }
// };
