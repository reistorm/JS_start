// лучше не передавать тело запроса
const express = require('express');

const app = express();

app.delete('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>Hello!</h1>');
});

app.listen(3000);