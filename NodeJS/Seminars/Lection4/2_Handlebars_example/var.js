// шаблонизатор handlebars 
// импортируем handlebars из npm
const handlebars = require('handlebars');
// компиляция шаблона с помощью compile 
const template = handlebars.compile('<p>{{someVar}}</p>');
const result = template({someVar: "Hello!"});

console.log(result);