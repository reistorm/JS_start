// Синхронные функции - это аналоги асинхронных. Они делают те же самые действия, 
// но при этом блокируют поток выполнения скрипта

const fs = require('fs');

const fileData = fs.readFileSync(__filename, 'utf-8');

console.log(fileData);

fs.appendFileSync(__filename, '\nconsole.log("Hello!")');

// если файл отсутствует, то необходимо обрабатывать ошибку с помощью try-catch
const fs = require('fs');

try {
    const result = fs.readFileSync(__filename, 'utf-8');
    console.log(result);
} catch (err) {
    console.error(err);
}

try {
    fs.appendFileSync(__filename, '\nconsole.log("Hello!")');
    console.log('The file was saved');
} catch (err) {
    console.error(err);
}