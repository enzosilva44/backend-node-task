const { insertUser, getAllUsersModel, editUserModel, deleteUserModel } = require("../models/userModel");
const User = require("../classes/userClass");

module.exports = class userController {
  static async postUser (req, res) {
    try {
      const { email, senha } = req.body;
      console.log(req.body);

      // Extrai a parte do email antes do '@'
      const nm_usuario = email.split('@')[0];

      const user = new User();
      user.nmUsuario = nm_usuario;
      user.email = email;
      user.senha = senha;

      if (!user.nmUsuario || !user.email || !user.senha) {
        return res.status(401).json({ error: true, message: "Preencha todos os campos" });
      }

      const result = await insertUser(user);

      console.log(result, "teste result");
      return res.status(201).json({ error: false, message: "Usuário inserido com sucesso" });
    } catch (err) {
      console.error('Error occurred:', err);
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  }

  static async getAllUsers (req, res) {
    try {
      const users = await getAllUsersModel();
      return res.status(200).json({ error: false, users });
    } catch (err) {
      console.error('Error occurred:', err);
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  }

  static async editUser(req, res) {
    try {
      const { id_usuario, nm_usuario, email, senha } = req.body;
      console.log(req.body);

      if (!id_usuario || !nm_usuario || !email || !senha) {
        return res.status(401).json({ error: true, message: "Preencha todos os campos" });
      }

      const user = new User();
      user.idUsuario = id_usuario;
      user.nmUsuario = nm_usuario;
      user.email = email;
      user.senha = senha;

      const result = await editUserModel(user);
      console.log(result, "edit result");

      return res.status(200).json({ error: false, message: "Usuário editado com sucesso" });
    } catch (err) {
      console.error('Error occurred:', err);
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id_usuario } = req.body;
      if (!id_usuario) {
        return res.status(401).json({ error: true, message: "Informe ID do usuário" });
      }
      const result = await deleteUserModel(id_usuario);
      console.log(result, "delete result");
      return res.status(200).json({ error: false, message: "Usuário deletado com sucesso" });
    } catch (err) {
      console.error('Error occurred:', err);
      return res.status(500).json({ error: true, message: "Erro no servidor" });
    }
  }
};
