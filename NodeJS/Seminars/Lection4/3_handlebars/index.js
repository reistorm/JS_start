const fs = require('fs');
const path = require('path');

const express = require('express');
const handlebars = require('handlebars');

const app = express();

const articles = [
    {title: 'Article 1', description: 'First awessome article'},
    {title: 'Article 2', description: 'Second awessome article'},
    {title: 'Article 3', description: 'Third awessome article'},

];

app.get('/', (req, res) => {
    // формируем путь к шаблону
    const pathToTemplate = path.join(__dirname, '/templates/home/handlebars');

    // загрузим файл
    fs.readFile(pathToTemplate, 'utf-8', (err, data) => {
        if(err) {
            // 500 - непредвиденная ошибка
            res.status(500);
            res.send(err.message);
        } else {
            // компилируем шаблон
            const template = handlebars.compile(data);
            // загружаем данные с массива и отправляем
            res.send(template({articles}));
        }
    })
})

app.listen(3000);