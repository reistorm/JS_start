function checkParams(schema) {
    return (req, res, next) => {
        const validationResult = schema.validate(req.params);
        if(validationResult.error) {
            return res.status(400).send(validationResult.error.details);
        }
        // если все хорошо, то метод next() вызывает следующий обработчик из index.js
        next();
    }
}

function checkBody(schema) {
    return (req, res, next) => {
        const validationResult = schema.validate(req.body);
        if(validationResult.error) {
            return res.status(400).send(validationResult.error.details);
        }
        next();
    }
}

module.exports = { checkParams, checkBody};