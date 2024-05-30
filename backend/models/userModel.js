const db = require('../db/database'); 
db.connect();

async function insertUser(tutor, idEndereco){   
    const client = await db.connect();
    const sql = "INSERT INTO tb_users () VALUES () RETURNING id_user;";
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
    const sql = "SELECT * FROM tb_users WHERE id_user = $1;";
    const values = [dataAccountUser.id_user];
    const res = await client.query(sql, values);
    client.release();
    return res.rows;
}

module.exports = {
    insertUser,
    selectOneUserModel
}