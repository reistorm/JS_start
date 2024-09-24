const express = require('express');
const joi = require('joi');

const app = express();

app.use(express.json());

const users = [];
let uniqueID = 0;

const userSchema = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1)
});

app.get('/users', (req, res) => {
    res.send({ users });
})

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if(user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null});
    }
})

app.post('/users', (req, res) => {
    uniqueID += 1;
    users.push({
        id: uniqueID,
        ...req.body
    })
    res.send({ id: uniqueID})
})

app.put('/users/:id', (req, res) => {
    // сюда помещаем результат валидации
    const result = userSchema.validate(req.body);
    if(result.error) {
        return res.status(404).send({ error: result.error.details})
    }
    const userId = +req.params.id;
    const user = users.find(user => user.id === userId);
    if(user) {
        // из тела запроса вытащим ключи 
        const {firstName, secondName, age, city} = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null});
    }
})

app.delete('/users/:id', (res, req) => {
    const userId = +req.params.userId;
    const user = users.find(user => user.id === Number(userId));
    if(user) {
        const userIndex = users.indexOf(user);
        user.splice(userIndex, 1);
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null});
    }
})

app.listen(3000, () => {
    console.log('Сервер запущен');
});