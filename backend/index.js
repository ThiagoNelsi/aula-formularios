const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/cadastro', (req, res) => {
    console.log(req.body);
    res.send('Cadastrado!');
});

app.listen(3333);