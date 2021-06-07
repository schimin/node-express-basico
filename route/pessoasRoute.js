const express = require('express');
const router = express.Router();
const pessoasData = require('../data/pessoasData');
const message = require('../scripts/messages');

router.get("/pessoas/:id", async function (req, res){
    if (isNaN(req.params.id)) {
        res.statusCode = 400;
        res.send(message.msg_erro_vazio);
    }else{
        var id  = parseInt(req.params.id);
        console.log('Acessou Endpoint pessoas', id);
        const pessoas = await pessoasData.getPessoas(id);
        if (pessoas != undefined){
            res.statusCode = 200;
            res.json(pessoas);
        }else {
            res.sendStatus(404);
        } 
       
    }
    
})

module.exports = router;
