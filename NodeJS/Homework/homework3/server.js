const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const jsonFilePath = path.join(__dirname, 'viewCount.json');

// Функция для получения количества просмотров из файла JSON
function getViewCount(page) {
    if (fs.existsSync(jsonFilePath)) {
        const data = fs.readFileSync(jsonFilePath);
        const jsonData = JSON.parse(data);
        return jsonData[page] || 0;
    }
    return 0; // Если файла нет, начинаем с 0
}


// Функция для сохранения количества просмотров в файл JSON
function saveViewCount(page, count) {
    let data = {};
    if(fs.existsSync(jsonFilePath)) {
        data = JSON.parse(fs.readFileSync(jsonFilePath));
    }
    data[page] = count;
    fs.writeFileSync(jsonFilePath, JSON.stringify(data));
}

// Обработчик маршрута / и /about
app.get('/', (req, res) => {
    res.redirect('./page1');
});
app.get('/about', (req, res) => {
    res.redirect('/page2');
})

// Роут для отслеживания просмотров
app.get('/increment-view/page1', (req, res) => {
    let viewCount = getViewCount('page1');
    viewCount++; // Увеличиваем счетчик
    saveViewCount('page1', viewCount); // Сохраняем новое значение в файл
    res.json({ viewCount }); // Возвращаем текущее значение счетчика в формате JSON
});

app.get('/increment-view/page2', (req, res) => {
    let viewCount = getViewCount('page2');
    viewCount++; // Увеличиваем счетчик
    saveViewCount('page2', viewCount); // Сохраняем новое значение в файл
    res.json({ viewCount }); // Возвращаем текущее значение счетчика в формате JSON
});

// Главная страница
app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page1.html')); // Отправляем HTML файл на фронтенд
    
});

// About
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page2.html'));
   
})

// Настройка статической папки для хранения HTML файла
app.use(express.static('public'));

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});