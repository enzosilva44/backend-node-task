const { insertUser } = require("../models/userModel");

exports.postUser = async (req, res) => {
    try {
      const { nm_usuario, email, senha } = req.body;
      console.log(req.body);
      const user = new User();
      user.nmUsuario = nm_usuario;
      user.email = email;
      user.senha = senha;

      const result = await insertUser(user.convertToMapUser());
      console.log(result, "teste result");
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

