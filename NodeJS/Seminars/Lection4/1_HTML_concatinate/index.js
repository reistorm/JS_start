// генерация html "на лету"
const express = require('express');
const app = express();
// массив статей с заголовком и описанием
const articles = [
    {title: 'Article 1', description: 'First awessome article'},
    {title: 'Article 2', description: 'Second awessome article'},
    {title: 'Article 3', description: 'Third awessome article'},

];
// экспресс-обработчик роута /
app.get('/', (req, res) => {
    // создаем html с заголовком Article list и перебираем статьи
    // добавляем к каждой заголовок и параграф
    let html = '<h1>Article list</h1>';
    for(const articleData of articles) {
        html += `<h2>${articleData.title}</h2>`;
        html += `<p>${articleData.description}</p>`;
    }
    res.send(html);
});

app.listen(3000);
// минусы
// нет подсветки синтаксиса
// нужно писать много кода
// код сложно поддерживать