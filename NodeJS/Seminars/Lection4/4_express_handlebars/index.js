// библиотека express-handlebars

const express = require('express');
// импортируем библиотеку express-handlebars, не всю, а только функцию engine
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
// установка переменных окружения экспресс
app.set('view engine', 'handlebars'); // какой движок исп-ся
app.set('views', './views'); // директория, где хранятся templates

const articles = [
    {title: 'Article 1', description: 'First awessome article'},
    {title: 'Article 2', description: 'Second awessome article'},
    {title: 'Article 3', description: 'Third awessome article'},

];

app.get('/', (req, res) => {
    // render - функция, что мы хотим вернуть клиенту
    // 'home' - название файла
    // в {} то что хотим сгенерировать и показать
    res.render('home', { title: 'Home', articles})
    // можно тут же указывать нужный layout (по умолчанию main.handlebars)
    //res.render('home', { layout: 'index', title: 'Home', articles})

});

app.listen(3000);