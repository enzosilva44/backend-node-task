const { insertUser } = require("../models/userModel");
const User = require("../classes/userClass");

module.exports = class userController {
  static async postUser (req, res) {

    try {
      const { nm_usuario, email, senha } = req.body;
      console.log(req.body);

      const user = new User();
      console.log( "teste 1" );
      user.nmUsuario = nm_usuario;
      console.log( "teste 2" );
      user.email = email;
      console.log( "teste 3" );
      user.senha = senha;
      console.log( "teste 4" );

      console.log(user.convertToMapUser());
      console.log( "teste 5" );

      if(!user.nmUsuario || !user.email || !user.senha) return res.status(401).json({ error: true, message: "Preencha todos os campos" });
      console.log( "teste 6" );

      const result = await insertUser(user.convertToMapUser());
      console.log( "teste 7" );
      
      console.log(result, "teste result");
      return res.status(201).json({ error: false, message: "Usário inserido com sucesso" });

    } catch (err) {
        return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  };
};
