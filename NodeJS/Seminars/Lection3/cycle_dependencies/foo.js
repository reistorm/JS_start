// foo экспортирует в себя baz, определяет константу
// world и экспортирует ее
const baz = require('./baz');

console.log(baz);

const world = 'world';


module.exports = world;