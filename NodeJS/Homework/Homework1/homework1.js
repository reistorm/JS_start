// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую 
// страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на
// первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно
// увеличиваться на единицу каждый раз, когда загружается страница.


const http = require('http');

let indexCount = 0;
let aboutCount = 0;

// Функция для создания HTML-страницы
const createPage = (content, count) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page</title>
    </head>
    <body>
        <h1>${content}</h1>
        <p>Количество просмотров: ${count}</p>
        <a href="/">На главную</a>
    </body>
    </html>
`;



const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    
    if(req.url === '/') {
        indexCount++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(createPage('Главная страница', indexCount));
    } else if(req.url === '/about') {
        aboutCount++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(createPage('About', aboutCount));
       
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        
        res.end('<h1>Страница не найдена</h1>');
        
    }
    
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})

