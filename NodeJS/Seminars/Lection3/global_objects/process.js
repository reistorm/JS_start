console.log(process.version); // Версия Node.js
console.log(process.arch); // Архитектура процессора
console.log(process.pid); // Идентификатор текущего процесса в ОС
console.log(process.cwd); // Директория, откуда был запущен скрипт


// Свойства __dirname, __filename
// __dirname  хранит в себе путь к директории, в которой хранится текущий скрипт
// __filename хранит в себе путь к текущему скрипту

// например хранится в /Users/Student/Desktop/index.js

// Выведет в консоль путь к файлу
console.log(__filename);

// Выведет в консоль путь к директории
console.log(__dirname);