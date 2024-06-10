// userModel.js
const pool = require('../db/database');

async function insertUser(userData) {
  try {
    console.log(userData);
    
    const sql = "INSERT INTO tb_usuarios (nm_usuario, email, senha) VALUES ($1, $2, $3) RETURNING *";
    const values = [userData.nmUsuario, userData.email, userData.senha];
    const result = await pool.query(sql, values);
    console.log("Usuário inserido com sucesso model:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("Erro ao inserir usuário:", err);
    throw err;
  }
}

async function selectOneUserModel(dataAccountUser){
  try {
    const sql = "SELECT * FROM tb_usuarios WHERE id_user = $1;";
    const values = [dataAccountUser.id_user];
    const result = await pool.query(sql, values);
    return result.rows;
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    throw err;
  }
}

async function getAllUsersModel() {
  try {
    const sql = "SELECT * FROM tb_usuarios";
    const result = await pool.query(sql);
    return result.rows;
  } catch (err) {
    console.error("Erro ao buscar todos os usuários:", err);
    throw err;
  }
}

module.exports = {
  insertUser,
  selectOneUserModel,
  getAllUsersModel
}
