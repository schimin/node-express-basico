const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT_SERVER || 5000;

app.use(cors());

app.use("/", require('../server/route/pessoasRoute'));
app.use("/", require('../server/route/produtosRoute'));


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
