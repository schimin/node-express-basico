const config = require('../../database/connection');
const sql = require('mssql');
const message = require('../scripts/messages');

async function getPessoas (id){
    try {
        var query = `SELECT * \
        FROM PESSOA \ 
        WHERE Pessoa = @id\
        AND status = 'S'`;

        let conexao = await sql.connect(config);
        let resultado = await conexao.request()
        .input('id', sql.Int, id)
        .query(query);
        
        if(resultado.rowsAffected > 0) {
            return resultado.recordset;
        }else {
            return message.msg_res_vazio;
        }
        

    }catch(error){
        console.log(message.msg_erro_bd, error);
    }
}

module.exports = {
    getPessoas : getPessoas
};
