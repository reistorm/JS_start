// Запись и перезапись файла
const fs = require('fs');

fs.writeFile(__filename, 'console.log("Hello, world!!!")', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('The file was saved!');
});