// Условная конструкция
// выбираем будем ли выводить текст жирным или нет

const handlebars = require('handlebars');
// bold - переменная
const template = handlebars.compile(
    '{{#if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}'
);
console.log(template({ bold: true}));
console.log(template({ bold: false}));
