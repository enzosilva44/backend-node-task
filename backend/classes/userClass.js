module.exports = class User{
    #idUsuario;
    #nmUsuario;
    #email;
    #senha;

    constructor(){
        this.#idUsuario = null;
        this.#nmUsuario = null;
        this.#email = null;
        this.#senha = null;
    }

    set idUsuario(idUsuario){
        idUsuario = Number(idUsuario);
        if(typeof(idUsuario) == 'number' || isNaN(idUsuario)) return false;
        this.#idUsuario = idUsuario;
    }
    get idUsuario(){
        return this.#idUsuario;
    }

    set nmUsuario(nmUsuario){
        this.#nmUsuario = nmUsuario;
    }
    get nmUsuario(){
        return this.#nmUsuario;
    }

    set email(email){
        this.#email = email;
    }
    get email(){
        return this.#email;
    }

    set senha(senha){
        this.#senha = senha;
    }
    get senha(){
        return this.#senha;
    }

    convertToMapUser() { return {
        id_usuario: this.idUsuario,
        nm_usuario: this.nmUsuario,
        email: this.email,
        senha: this.senha
        } 
    }
}