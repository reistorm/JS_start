// чтобы не перезаписывать файл, а добавлять то, что нужно

const fs = require('fs');

fs.appendFile(__filename, '\nconsole.log("Hello, world!!!");', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('The file was saved');
});

console.log("Hello, world!!!");