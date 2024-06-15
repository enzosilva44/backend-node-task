module.exports = class Task {
    #id_tarefa;
    #titleTask;
    #descriptionTask;
    #limited_date;
    #hourTask;
    #statusTask;
    
    constructor() {
        this.#id_tarefa = null;
        this.#titleTask = null;
        this.#descriptionTask = null;
        this.#limited_date = null;
        this.#hourTask = null;
        this.#statusTask = null;
    }

    set id_tarefa(id_tarefa) {
        id_tarefa = Number(id_tarefa);
        if (typeof id_tarefa !== "number" || isNaN(id_tarefa)) {
            throw new Error("id_tarefa deve ser um número válido");
        }
        this.#id_tarefa = id_tarefa;
    }
    get id_tarefa() {
        return this.#id_tarefa;
    }

    set titleTask(titleTask) {
        if (typeof titleTask !== "string" || !titleTask.trim()) {
            throw new Error("titleTask deve ser uma string não vazia");
        }
        this.#titleTask = titleTask;
        }
    get titleTask() {
        return this.#titleTask;
    }

    set descriptionTask(descriptionTask) {
        if (typeof descriptionTask !== "string" || !descriptionTask.trim()) {
            throw new Error("descriptionTask deve ser uma string não vazia");
        }
    this.#descriptionTask = descriptionTask;
    }
    get descriptionTask() {
        return this.#descriptionTask;
    }

    set limited_date(limited_date) {
      // Check if the input is a valid Date object or a string that can be parsed as a date
        if (limited_date instanceof Date) {
            if (isNaN(limited_date)) {
                throw new Error("limited_date deve ser uma data válida");
            }
            this.#limited_date = limited_date;
        } else if (typeof limited_date === "string") {
            const date = new Date(limited_date);
                if (isNaN(date)) {
                    throw new Error(
                        "limited_date deve ser uma string que represente uma data válida"
                    );
                }
            this.#limited_date = date;
        } else {
            throw new Error(
                "limited_date deve ser uma instância de Date ou uma string representando uma data válida"
            );
        }
    }

    get limited_date() {
        return this.#limited_date;
    }

    set hourTask(hourTask) {
        const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timeRegex.test(hourTask)) {
            throw new Error("hourTask deve estar no formato HH:MM");
        }
        this.#hourTask = hourTask;
    }

    // Getter para hourTask
    get hourTask() {
        return this.#hourTask;
    }

    set statusTask(statusTask) {
        statusTask = Number(statusTask);
        if (typeof statusTask !== "number" || isNaN(statusTask)) {
            throw new Error("statusTask deve ser um número válido");
        }
        this.#statusTask = statusTask;
    }
    get statusTask() {
        return this.#statusTask;
    }

    convertToMapUser() {
        return {
            titleTask: this.#titleTask,
            descriptionTask: this.#descriptionTask,
            limited_date: this.#limited_date,
            hourTask: this.#hourTask,
            statusTask: this.#statusTask
        };
    }
};
