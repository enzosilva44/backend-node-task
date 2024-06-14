// taskModel.js
const pool = require('../db/database');

async function insertTask(userData) {
    try {
        console.log(userData);

        const sql = "INSERT INTO tb_tarefas (desc_tarefa, fg_ativo, data_tarefa, horario, titulo_tarefa) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [userData.descriptionTask, userData.statusTask, userData.limited_date, userData.hourTask, userData.titleTask];
        const result = await pool.query(sql, values);
        console.log("tarefa criada com sucesso model:", result.rows[0]);
        return result.rows[0];
    } catch (err) {
        console.error("Erro ao inserir tarefa:", err);
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

async function editTaskModel(task) {
    try {
        const sql = "UPDATE tb_tarefas SET desc_tarefa = $1, fg_ativo = $2, data_tarefa = $3, horario = $4, titulo_tarefa = $5 WHERE id_tarefa = $6 RETURNING *";
        const values = [task.descriptionTask, task.statusTask, task.limited_date, task.hourTask, task.titleTask, task.id_tarefa];
        const result = await pool.query(sql, values);
        return result.rows;
    } catch (err) {
        console.error("Erro ao editar tarefa:", err);
        throw err;
    }
}   

async function deleteTaskModel(id_tarefa) {
    try {
        const sql = "DELETE FROM tb_tarefas WHERE id_tarefa = $1 RETURNING *";
        const values = [id_tarefa];
        const result = await pool.query(sql, values);
        return result.rows;
    } catch (err) {
        console.error("Erro ao deletar tarefa:", err);
        throw err;
    }
}

async function getByIdTaskModel(id_tarefa) {
    try {
        const sql = "SELECT * FROM tb_tarefas WHERE id_tarefa = $1";
        const values = [id_tarefa];
        const result = await pool.query(sql, values);
        return result.rows;
    } catch (err) {
        console.error("Erro ao buscar tarefa:", err);
        throw err;
    }
}

module.exports = { 
    insertTask,
    getAllTasksModel,
    editTaskModel,
    deleteTaskModel,
    getByIdTaskModel
}