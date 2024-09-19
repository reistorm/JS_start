// foo экспортирует в себя baz определяет константу
// hello и экспортирует ее
// т.о. получается цикл
const foo = require('./foo');

console.log(foo);

const hello = 'hello';

module.exports = hello;