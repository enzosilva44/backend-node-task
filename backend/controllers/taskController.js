const { insertUser, getAllUsersModel, editUserModel, deleteUserModel } = require("../models/taskModel");
const Task = require("../classes/taskClass");

module.exports = class taskController {
    static async postTask (req, res) {
    try {
        const { titleTask, descriptionTask, limited_date, hourTask, statusTask } = req.body;
        console.log(req.body);

        const task = new Task();
        task.titleTask = titleTask;
        task.descriptionTask = descriptionTask;
        task.limited_date = limited_date;
        task.hourTask = hourTask;
        task.statusTask = statusTask;

        if (!titleTask || !descriptionTask || !limited_date || !hourTask || !statusTask) {
            return res.status(401).json({ error: true, message: "Preencha todos os campos" });
        }

        const result = await insertTask(task);

            console.log(result, "teste result");
            return res.status(201).json({ error: false, message: "Usuário inserido com sucesso" });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }
}