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

            const task = new Task();
            task.titleTask = titleTask;
            task.descriptionTask = descriptionTask;
            task.limited_date = limited_date;
            task.hourTask = hourTask;
            task.statusTask = statusTask;

            console.log("Task object:", task);

            const result = await insertTask(task);
            console.log("Insert result:", result);

            return res.status(201).json({ error: false, message: "Tarefa criada com sucesso" });
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }

    static formatTaskDate(task) {
        if (task.horario) {
            // Remover os segundos do horário (últimos três caracteres)
            task.horario = task.horario.substring(0, task.horario.length - 3);
        }
        
        // Formatando a data, caso necessário
        if (task.data_tarefa instanceof Date) {
            task.data_tarefa = task.data_tarefa.toISOString().split('T')[0];
        } else if (typeof task.data_tarefa === 'string') {
            task.data_tarefa = task.data_tarefa.split('T')[0];
        } else {
            // Tratamento adicional se necessário
            task.data_tarefa = null; // ou outro valor padrão
        }
        
        return task;
    }        

    static convertStatusToString(task) {
        switch (task.fg_ativo) {
            case 2:
                task.fg_ativo = "pendente";
                break;
            case 1:
                task.fg_ativo = "andamento";
                break;
            case 3:
                task.fg_ativo = "concluida";
                break;
            default:
                task.fg_ativo = "inválido";
                console.log("Status da tarefa recebido na requisição é inválido");
                break;
        }
        return task;
    }

    static async getAlltasks(req, res) {
        try {
            const task = await getAllTasksModel();
            console.log("Tasks fetched from model:", task);
    
            if (!task || task.length === 0) {
                return res.status(404).json({ error: true, message: "Nenhuma tarefa encontrada" });
            }
    
            const convertedTasks = task.map(task => {
                task = taskController.convertStatusToString(task);
                return taskController.formatTaskDate(task);
            });
    
            console.log("Converted tasks:", convertedTasks);
    
            return res.status(200).json({ error: false, task: convertedTasks });
        } catch (err) {
            console.error('Error occurred in getAlltasks:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }
    
    
    static async editTask(req, res) {
        try {
            const { id_tarefa, titleTask, descriptionTask, limited_date, hourTask, statusTask } = req.body;
            console.log(req.body);

            if (!id_tarefa || !titleTask || !descriptionTask || !limited_date || !hourTask || !statusTask) {
                return res.status(401).json({ error: true, message: "Preencha todos os campos" });
            }

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

    static async deleteTask(req, res) {
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

    static async getByIdTask(req, res) {
        try {
            const { id_tarefa } = req.body;
            if (!id_tarefa) {
                return res.status(401).json({ error: true, message: "Informe ID da tarefa" });
            }
            const task = await getByIdTaskModel(id_tarefa);
            if (task) {
                const formattedTask = this.formatTaskDate(this.convertStatusToString(task));
                return res.status(200).json({ error: false, task: formattedTask });
            } else {
                return res.status(404).json({ error: true, message: "Tarefa não encontrada" });
            }
        } catch (err) {
            console.error('Error occurred:', err);
            return res.status(500).json({ error: true, message: "Erro no servidor" });
        }
    }
};
