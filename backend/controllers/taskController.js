const { insertTask, getAllTasksModel, editTaskModel, deleteTaskModel, getByIdTaskModel } = require("../models/taskModel");
const Task = require("../classes/taskClass");

module.exports = class taskController {
    static async postTask(req, res) {
        try {
            const { titleTask, descriptionTask, limited_date, hourTask, statusTask } = req.body;
            console.log("Request body:", req.body);
    
            if (!titleTask || !descriptionTask || !limited_date || !hourTask || !statusTask) {
                console.log("Validation failed: Missing fields");
                return res.status(401).json({ error: true, message: "Preencha todos os campos" });
            }
    
            // Validação adicional para statusTask
            const validStatus = ["pendente", "andamento", "concluida"];
            if (!validStatus.includes(statusTask)) {
                console.log("Validation failed: Invalid statusTask");
                return res.status(401).json({ error: true, message: "Status inválido" });
            }
    
            const task = new Task();
            task.titleTask = titleTask;
            task.descriptionTask = descriptionTask;
            task.limited_date = limited_date;
            task.hourTask = hourTask;
    
            // Converte statusTask para número
            switch (statusTask) {
                case "pendente":
                    task.statusTask = 2;
                    break;
                case "andamento":
                    task.statusTask = 1;
                    break;
                case "concluida":
                    task.statusTask = 3;
                    break;
                default:
                    task.statusTask = 4; // Inválido
                    break;
            }
    
            console.log("Task object:", task);
    
            const result = await insertTask(task);
            console.log("Insert result:", result);
    
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