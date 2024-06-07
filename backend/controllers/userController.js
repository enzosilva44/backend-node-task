const User = require("../classes/userClass");
const { insertUser, selectOneUserModel } = require("../models/userModel");

module.exports = class CadastrosUsuarios {
  static async postUser(req, res) {
    try {
      const { nm_usuario, email, senha, } = req.body;

      if (!nm_usuario || !email || !senha) {
        return res.status(400).json({ error: true, message: "Dados incompletos" });
      }

      const user = new User();
      user.nmUsuario = nm_usuario;
      user.email = email;
      user.senha = senha;

      const result = await insertUser(user.convertToMapUser());

      if (result.affectedRows > 0) {
        return res.status(201).json({
          error: false,
          message: "Usuário cadastrado com sucesso",
          data: result.insertId
        });
      } else {
        return res.status(500).json({ error: true, message: "Erro ao inserir usuário" });
      }
    } catch (err) {
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  }

  static async getUserById(req, res) {
    try {
      const id_user = req.params.idUser;

      const user = new User();
      user.idUser = id_user;

      if (!user.idUser) {
        return res.status(401).json({ error: true, message: "Dados incorretos" });
      }

      const result = await selectOneUserModel(user.convertToMapUser());

      if (result.length === 0) {
        return res.sendStatus(204);
      }

      return res.status(200).json({
        error: false,
        message: "Busca de dados com sucesso",
        data: result,
      });
    } catch (err) {
      return res.sendStatus(501);
    }
  }
};
