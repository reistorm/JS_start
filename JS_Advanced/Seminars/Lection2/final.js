// Разработка системы регистрации пользователей для веб-приложения

// Глобальный объект
const App = {};

// Защищенное свойства классов
class User {
    // Защищенное свойство _name
    #_name;

    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователей
App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if(!name || !email || !password) {
            throw new Error('Введены не все данные');
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Доп.обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // Здесь можно добавить логику сохранения пользователя в БД или отправку 
        // данных на сервер

        console.log('ПОльзователь успешно зарегистрирован', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error){
        console.log('Ошибка регистрации', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
};

// Вызов функции регистрации пользователя
App.registerUser('John Dill', 'john123@example.com', 'password123');
App.registerUser('Jane Smit', '', 'password92883');