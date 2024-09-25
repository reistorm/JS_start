const express = require('express');
const joi = require('joi');
const fs = require('fs');
const path = require('path');
const { load } = require('mime');

const app = express();

const usersFilePath = path.join(__dirname, 'users.json');
app.use(express.json());

let users = [];

const saveUsersToFile = () => {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, data);
}

const loadUsersFromFile = () => {
    if(fs.existsSync(usersFilePath)){
        const rawData = fs.readFileSync(usersFilePath, 'utf8');
        users = JSON.parse(rawData);
    }
}
// заполним массив данными с файла users.json
loadUsersFromFile();

const userSchema = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1)
});

const validateUser = (user) => {
    return userSchema.validate(user);
};

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
})



app.put('/users/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));
    const {error} = validateUser(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    if(userIndex !== -1){
        users[userIndex] = { ...users[userIndex], ...req.body};
        saveUsersToFile(users[userIndex]);
        res.json(users[userIndex]);
    } else {
        res.status(404).json({message: 'User not found'});
    }
})

app.delete('/users/:id', (req, res) => {
    console.log('req.params:', req.params);
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }

    users.splice(userIndex, 1);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Ошибка записи файла' });
        }
        res.status(204).send(); 
    });
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.map(user => user.id).filter(id => id !== null && id !== undefined);
    if(newUser.id.length) {
        newUser.id = Math.max(...newUser.id) + 1;
    } else {
        newUser.id = 1;
    }
    users.push(newUser);
    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if(err) {
            return res.status(500).json({error: 'Ошибка записи файла'});
        }
        res.status(201).json(newUser);
    })
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(3000, () => {
    console.log('Сервер запущен');
});