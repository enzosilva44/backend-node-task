// taskModel.js
const pool = require('../db/database');

async function insertTask(userData) {
    try {
        console.log(userData);

        const sql = "INSERT INTO tb_tarefas (desc_tarefa, fg_ativo, data_tarefa, horario, titulo_tarefa) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [userData.descriptionTask, userData.statusTask, userData.limited_date, userData.hourTask, userData.titleTask];
        const result = await pool.query(sql, values);
        console.log("Usuário inserido com sucesso model:", result.rows[0]);
        return result.rows[0];
    } catch (err) {
        console.error("Erro ao inserir usuário:", err);
        throw err;
    }
}

async function getAllTasksModel() {
    try {
        const sql = "SELECT * FROM tb_tarefas";
        const result = await pool.query(sql);
        return result.rows;
    } catch (err) {
        console.error("Erro ao buscar todas as tarefas:", err);
        throw err;
    }
}

module.exports = { 
    insertTask,
    getAllTasksModel,
    editUserModel,
    deleteUserModel

}