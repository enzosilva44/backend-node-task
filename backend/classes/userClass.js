module.exports = class User {
    #idUsuario;
    #nmUsuario;
    #email;
    #senha;

    constructor() {
        this.#idUsuario = null;
        this.#nmUsuario = null;
        this.#email = null;
        this.#senha = null;
    }

    set idUsuario(idUsuario) {
        idUsuario = Number(idUsuario);
        if (typeof idUsuario !== 'number' || isNaN(idUsuario)) {
            throw new Error('idUsuario deve ser um número válido');
        }
        this.#idUsuario = idUsuario;
    }
    get idUsuario() {
        return this.#idUsuario;
    }

    set nmUsuario(nmUsuario) {
        if (typeof nmUsuario !== 'string' || !nmUsuario.trim()) {
            throw new Error('nmUsuario deve ser uma string não vazia');
        }
        this.#nmUsuario = nmUsuario;
    }
    get nmUsuario() {
        return this.#nmUsuario;
    }

    set email(email) {
        if (typeof email !== 'string' || !email.trim()) {
            throw new Error('Email deve ser uma string não vazia');
        }
        this.#email = email;
    }
    get email() {
        return this.#email;
    }

    set senha(senha) {
        if (typeof senha !== 'string' || !senha.trim()) {
            throw new Error('Senha deve ser uma string não vazia');
        }
        this.#senha = senha;
    }
    get senha() {
        return this.#senha;
    }

    convertToMapUser() {
        return {
            nmUsuario: this.#nmUsuario,
            email: this.#email,
            senha: this.#senha
        };
    }
}
