const express = require('express');
// импортируем модули валидации
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, articleSchema } = require('./validation/scheme');

const app = express();

let uniqueID = 0;
// БД, в которой будут храниться статьи
const articles = [];
// промежуточный обработчик, который позволяет в теле запроса получать Json(в get, put, delete)
app.use(express.json());

// получение всех статей
app.get('/articles', (req, res) => {
    res.send({ articles });
})

// используется промежуточный обработчик checkParams, в него передаем idScheme
// с помощью которого валидируем params
app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if(article) {
        res.send({article});
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

// создание статьи
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID += 1;
    articles.push({
        id: uniqueID,
        ...req.body
    });
    res.send({
        id: uniqueID,
    })
});

// обновление статьи
app.put('/articles/:id', checkParams(idScheme), checkBody(articleSchema), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if(article) {
        // обновляем объекты статьи
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article});
    } else {
        res.status(404);
        res.send({ article: null});
    }
});

// удаление статьи
app.delete('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));
    if(article) {
        const articleIndex = articles.indexOf(article);
        // извлекаем статью
        articles.splice(articleIndex, 1);
        res.send({article});

    } else {
        res.status(404);
        res.send({ article: null});
    }
});

// обработать несуществующие роуты (проверить существует ли статья)
// use работает, когда не работает ни один обработчик выше
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    });
});

app.listen(3000);