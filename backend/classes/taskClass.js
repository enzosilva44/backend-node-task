module.exports = class Task {
    #idTask;
    #titleTask;
    #descriptionTask;
    #limited_date;
    #hourTask;
    #statusTask;
    
    constructor() {
        this.#idTask = null;
        this.#titleTask = null;
        this.#descriptionTask = null;
        this.#limited_date = null;
        this.#hourTask = null;
        this.#statusTask = null;
    }

    set idTask(idTask) {
        idTask = Number(idTask);
        if (typeof idTask !== "number" || isNaN(idTask)) {
            throw new Error("idTask deve ser um número válido");
        }
        this.#idTask = idTask;
    }
    get idTask() {
        return this.#idTask;
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
        hourTask = Number(hourTask);
        if (typeof hourTask !== "number" || isNaN(hourTask)) {
            throw new Error("hourTask deve ser um número válido");
        }
        this.#hourTask = hourTask;
    }
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
