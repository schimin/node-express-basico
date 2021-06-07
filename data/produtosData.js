const config = require('../../database/connection');
const sql = require('mssql');
const message = require('../scripts/messages');

async function getProdutos (id){
    try {
        query = `SELECT *\
                FROM Produtos p \
                WHERE status  = 'S'\
                AND id = @id`

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
    getProdutos : getProdutos
};
