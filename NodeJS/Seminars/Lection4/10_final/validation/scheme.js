const Joi = require('joi');

const articleSchema = Joi.object( {
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});

const idScheme = Joi.object({
    id: Joi.number().required(),
});

// экспортировали, чтобы использовать в коде сервера
module.exports = {articleSchema, idScheme};