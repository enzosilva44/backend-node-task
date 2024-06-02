const db = require('../db/database'); 
db.connect();

async function insertUser(tutor, idEndereco){   
    const client = await db.connect();
    const sql = "INSERT INTO tb_usuarios () VALUES () RETURNING id_user;";
    const values = [];
    try{
        const res = await client.query(sql, values);
        client.release();
        return res.rows[0].id_tutor;
    }catch(err){
        return 0;
    }
}

async function selectOneUserModel(dataAccountUser){
    const client = await db.connect();
    const sql = "SELECT * FROM tb_usuarios WHERE id_user = $1;";
    const values = [dataAccountUser.id_user];
    const res = await client.query(sql, values);
    client.release();
    return res.rows;
}

async function selectAllUsersModel() {
    const client = await db.connect();
    const sql = "SELECT * FROM tb_usuarios";
    try {
        const res = await client.query(sql);
        client.release();
        return res.rows;
    } catch (err) {
        console.error(err);
        client.release();
        throw err;
    }
}

module.exports = {
    insertUser,
    selectOneUserModel,
    selectAllUsersModel
}