const db = require('../db/database'); 
db.connect();

//const db = require("../db"); // Supondo que você tenha um módulo db para conectar ao banco de dados

async function insertUser(userData) {
  const values = [userData.nmUsuario, userData.email, userData.senha];

  try {
    const sql = "INSERT INTO tb_usuarios (nm_usuario, email, senha) VALUES ($1, $2, $3) RETURNING *";
    const result = await pool.query(sql, values);
    console.log("Usuário inserido com sucesso model:", result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error("Erro ao inserir usuário:", err);
    throw err;
  }
}

async function selectOneUserModel(dataAccountUser){
    const client = await db.connect();
    const sql = "SELECT * FROM tb_usuarios WHERE id_user = $1;";
    const values = [dataAccountUser.id_user];
    const res = await client.query(sql, values);
    client.release();
    return res.rows;
}

async function selectAllUsersModel() {
    const client = await db.connect();
    const sql = "SELECT * FROM tb_usuarios";
    try {
        const res = await client.query(sql);
        client.release();
        return res.rows;
    } catch (err) {
        console.error(err);
        client.release();
        throw err;
    }
}

module.exports = {
    insertUser,
    selectOneUserModel,
    selectAllUsersModel
}