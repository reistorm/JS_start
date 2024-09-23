// цикл по массиву
const handlebars = require('handlebars');

const items = [
    {name: 'first', number: 2},
    {name: 'second', number: 5},
];

// #each - перебор массива, this - обращение к каждому элементу массива
const template = handlebars.compile(
    '{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}'
);
console.log(template({items}));