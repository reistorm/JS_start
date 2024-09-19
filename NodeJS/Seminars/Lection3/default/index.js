const express = require('express');
// express позволяет работать с несколькими обработчиками в отличие от http
// И обрабатывать несуществующие страницы
const app = express();

// промежуточный обработчик use (логирует осн.запросы)
// если не использовать, то будет виснуть
// определяется до основных обработчиков GET
app.use((req, res, next) => {
    // method хранит инф-ию о http-запросе (т.е. здесь это get)
    console.log('Поступил запрос', req.method, req.url);
    // next - означает, что надо вызвать основной обработчик
    next();
});

// get -обработчик
// Корневая страница
app.get('/', (req, res) => {
    res.send('<h1>Welcome on my site!</h1>');
});

// Страница обо мне
app.get('./about', (req, res) => {
    res.send('<h1>Pages about me</h1>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});