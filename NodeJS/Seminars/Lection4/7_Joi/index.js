// Joi имеет методы, которые валидируют данные
// Joi-схема - набор информация о том, какие данные будут валидироваться
const Joi = require('joi');

// будет валидироваться как строка
const schema = Joi.string();

// возвращает результат - есть ошибка в валидации или нет
const result = schema.validate('Hello, World!!!');

console.log(result);

// при ошибке - полное чтение ошибки
console.log(JSON.stringify(result, null, 2));

// при ошибке - удобное чтение ошибки
console.log(result.error.details);