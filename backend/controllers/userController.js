const User = require('../classes/userClass');
const {insertUser, selectOneUserModel} = require('../models/userModel');

module.exports = class CadastrosUsuarios{
    static async postUser(req, res){
        try{
         const { nm_usuario, email, senha, telefone} = req.body;

         const user = User();

         user.nmUsuario = nm_usuario;
         user.email = email;
         user.senha = senha;
         user.telefone = telefone;
         
         if(!user.nmUsuario) return res.status(401).json({error: true, message:"Dados inválidos"});

         const result = await insertUser(user.convertToMapUser());

         if (result === 0) return res.sendStatus(204);

         return res.status(201).json({error: false, message:"Usário criado com sucesso"});
        }catch(err){
            res.sendStatus(501)
        }
    }
    static async getUserById(req, res){
        try {
          const id_user = req.params.idUser

          const user = new User();
          
          user.idUser = id_user;

          if(!user.idUser) return res.status(401).json({error:true, message:"Dados incorretos"});

          const result = await selectOneUserModel(user.convertToMapUser());

          if(result.length === 0 ) return res.sendStatus(204);

          return res.status(200).json({error:false, message: "Busca de dados com sucesso", data:result});

        } catch(err){
            res.sendStatus(501)
        }
    }
}

    