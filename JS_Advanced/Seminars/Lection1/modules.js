// Модули

// Экспорт модулей
// Чтобы получить доступ к объектам модулей, надо их экспортировать

export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}
// внутри блоков экспортировать нельзя




// Импорт

import { name, draw, reportArea, repotPerimeter } from './modules/square.js';

import * as Square from './modules/square.js' // импортировать всё, т.к. *
/js-examples/modules / basic - modules / modules / square.js 
./ modules / square.js // Точка в начале пути мы можем использовать для 
// обозначения текущей директории