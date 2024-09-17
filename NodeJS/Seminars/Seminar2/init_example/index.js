const uuid = require('uuid');
// экспорт функции sayHello из файла hello.js
const hello = require('./hello.js')

const id = uuid.v4();

console.log(id);

hello.sayHello();