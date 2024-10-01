
const express = require('express');

const app = express();

app.put('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>Hello!</h1>');
});

app.listen(3000);

// заходим на postman, делаем put-запрос и заходим в body=>raw=>json 
// пишем код на сайте и заходим в vsc => там отображается этот код