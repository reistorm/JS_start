const express = require('express');
const joi = require('joi');
const fs = require('fs');
const path = require('path');
const { load } = require('mime');

const app = express();

const usersFilePath = path.join(__dirname, 'users.json');
app.use(express.json());

let users = [];
let uniqueID = 0;


const saveUsersToFile = () => {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, data);
}

const loadUsersFromFile = () => {
    if(fs.existsSync(usersFilePath)){
        const rawData = fs.readFileSync(usersFilePath);
        return JSON.parse(rawData);
    } else {
        users = [];
    }
}

loadUsersFromFile();

const userSchema = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().min(0).max(150).required(),
    city: joi.string().min(1)
});

app.get('/users', (req, res) => {
    loadUsersFromFile();
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
})

app.post('/users', (req, res) => {
    uniqueID += 1;
    const newUser = { 
        id: uniqueID, 
        ...req.body
    };
    users.push(newUser);
    saveUsersToFile();
    res.status(201).json(newUser);
    //res.send({ id: uniqueID})
})

app.put('/users/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));
    if(userIndex !== -1){
        users[userIndex] = { ...users[userIndex], ...req.body};
        saveUsersToFile();
        res.json(users[userIndex]);
    } else {
        res.status(404).json({message: 'User not found'});
    }
})

app.delete('/users/:id', (res, req) => {
    const user = users.find(user => user.id === Number(req.params.id));    
    if(user){
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        saveUsersToFile();
        res.status(204).send();
    } else {
        res.status(404);
        res.json({message: 'User not found'});
    }
})

app.listen(3000, () => {
    console.log('Сервер запущен');
});