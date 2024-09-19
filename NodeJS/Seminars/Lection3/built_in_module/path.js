// Работа с путями в файловой системе

const path = require('path');

console.log(path.join); //объединяет части путей с получением одного
console.log(path.parse); // объект пути

console.log(path.dirname); //путь к директории

console.log(path.extname); //расширение файла

console.log(path.join('/User/Student', 'Desktop/index.js'));
// выведет /User/Student/Desktop/index.js

console.log(path.parse('/User/Student/Desktop/index.js'));
// выведет объект со свойствами root (корень пути), dir (директория файла), 
// base (название файла), ext (расширения файла), name (имя без расширения)

console.log(path.dirname('/User/Student/Desktop/index.js'));
// выведет /User/Student/Desktop/

console.log(path.extname('/User/Student/Desktop/index.js'));
// выведет .js 