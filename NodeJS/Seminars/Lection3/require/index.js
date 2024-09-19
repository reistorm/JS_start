const baz = require('./baz');
// require поймет, что в директории bar содержится файл, из которого
// нужно экспортировать данные
const bar = require('./bar');

console.log(baz);
console.log(bar);