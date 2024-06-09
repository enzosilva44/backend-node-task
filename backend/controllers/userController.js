const { insertUser } = require("../models/userModel");

module.exports = class userController {
  static async postUser (req, res) {

    try {
      const { nm_usuario, email, senha } = req.body;
      console.log(req.body);
      const user = new User();
      user.nmUsuario = nm_usuario;
      user.email = email;
      user.senha = senha;

      const result = await insertUser(user.convertToMapUser());
      console.log(result, "teste result");
      return res.status(201).json({ error: false, message: "Usário inserido com sucesso" });

    } catch (err) {
      console.log("mensagem erro do controller", error, message);
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  };
};
