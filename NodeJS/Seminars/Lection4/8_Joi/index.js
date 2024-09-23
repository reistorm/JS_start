const Joi = require('joi');

// схема валидации 
// метод required означает, что поле обязательно к валидации
const schema = Joi.object( {
    id: Joi.number().required(),
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});

// объект, который валидируем
const result = schema.validate({
    id: 1,
    title: '1',
    content: '154565135351',
});

console.log(result.error.details);