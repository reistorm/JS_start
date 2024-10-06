// Задание 2 (тайминг 35 минут)
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о
// своем премиум-аккаунте, а некоторые – нет. Ваша задача – создать структуру классов
// для этих пользователей и функцию для получения информации о наличии премиум-аккаунта,
// используя Опциональную цепочку вызовов методов, оператор нулевого слияния и
// instanceof.
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// 2. 3. 4. Создайте классы PremiumUser и RegularUser, которые наследуются от User.
// Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения
// срока действия), а у RegularUser такого свойства нет.
// Создайте функцию getAccountInfo(user), которая принимает объект класса User и
// возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
// Опциональную цепочку вызовов методов и оператор нулевого слияния.
// В функции getAccountInfo используйте instanceof для проверки типа переданного
// пользователя и дайте соответствующий ответ.


class User {
    #name;
    #firstName;
    constructor(name, firstName) {
        this.#name = name;
        this.#firstName = firstName;
    }
    get name() {
        return this.#name;
    }
    get firstName() {
        return this.#firstName;
    }
}

class PremiumUser extends User {
    constructor(name, firstName) {
        super(name, firstName);
    }
    premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
    // Пример: установить срок действия на год вперед
}

// создать RegularUser
class RegularUser extends User {
    constructor(name, firstName) {
        super(name, firstName);
    }
}

function getAccountInfo(user) {
    // Премиум аккаунт действителен до такой-то даты или инф-ия отсутствует
    if(user instanceof PremiumUser) {
        console.log(`Премиум аккаунт действителен до ${new Date(user?.premiumAccount)
            .getFullYear()}` ?? `Информация отсутствует`, user.name, user.firstName);
    }
    // пользователь без премиум аккаунта
    else if(user instanceof RegularUser) {
        console.log('Пользователь без премиум аккаунта', user.name, user.firstName);
    }
    // Тип пользователя не определен
    else {
        console.log('Тип пользователя не определен');
    }
}
// Проверка

const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Иванова');