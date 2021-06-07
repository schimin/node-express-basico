const express = require('express');
const router = express.Router();
const produtosData = require('../data/produtosData');
const message = require('../scripts/messages');

router.get("/produtos/:id", async function (req, res){
    if (isNaN(req.params.id)) {
        res.statusCode = 400;
        res.send(message.msg_erro_vazio);
    }else{
        var id  = parseInt(req.params.id);
        console.log('Acessou Endpoint produtos', id);
        const produtos = await produtosData.getProdutos(id);
        if (produtos != undefined){
            res.statusCode = 200;
            res.json(produtos);
        }else {
            res.sendStatus(404);
        } 
       
    }
    
})

module.exports = router;
