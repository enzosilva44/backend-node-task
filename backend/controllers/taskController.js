const { insertTask, getAllTasksModel, editTaskModel, deleteTaskModel, getByIdTaskModel } = require("../models/taskModel");
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
            return res.status(201).json({ error: false, message: "Tarefa criada com sucesso" });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }
    static async getAlltasks (req, res) {
        try {
            const task = await getAllTasksModel();

            return res.status(200).json({ error: false, task });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }

    static async editTask  (req, res) {
        try {
            const { id_tarefa, titleTask, descriptionTask, limited_date, hourTask, statusTask } = req.body;
            console.log(req.body);
            const task = new Task();
            task.id_tarefa = id_tarefa;
            task.titleTask = titleTask;
            task.descriptionTask = descriptionTask;
            task.limited_date = limited_date;
            task.hourTask = hourTask;
            task.statusTask = statusTask;
            const result = await editTaskModel(task);
            console.log(result, "edit result");
            return res.status(200).json({ error: false, message: "Tarefa editada com sucesso" });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }

    static async deleteTask (req, res) {
        try {
            const { id_tarefa } = req.body;
            if (!id_tarefa) {
                return res.status(401).json({ error: true, message: "Informe ID da tarefa" });
            }
            const result = await deleteTaskModel(id_tarefa);
            console.log(result, "delete result");
            return res.status(200).json({ error: false, message: "Tarefa deletada com sucesso" });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }

    static async getByIdTask (req, res) {
        try {
            const { id_tarefa } = req.body;
            if (!id_tarefa) {
                return res.status(401).json({ error: true, message: "Informe ID da tarefa" });
            }
            const task = await getByIdTaskModel(id_tarefa);
            return res.status(200).json({ error: false, task });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }
}