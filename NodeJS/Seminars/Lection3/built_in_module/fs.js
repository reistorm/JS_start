// модуль fs - чтение и запись файла
const fs = require('fs');

fs.readFile('path/to/file', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
// укажем в пути __filename и он покажет текущий скрипт (весь код)
fs.readFile(__filename, 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});