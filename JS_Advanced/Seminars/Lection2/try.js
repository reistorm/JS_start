try {
    undefined = 1;
} catch {
    console.log("That happen");
}
finally {
    console.log("Its good"); // Its good
}

// Пример: Работа с делением чисел

function divideNumber(a, b) {
    try {
        const result = a / b;
        if(isNaN(result)) {
            throw new Error('Результат деления не яв-я числом')
        }
        console.log('Результат деления:', result);
    } catch (error){
        console.error('Ошибка деления', error);
    } finally {
        console.log('Операция деления завершена');
    }
}

divideNumber(10, 2); // 5. Операция деления завершена
divideNumber(10, 0); // Результат деления: Infinity. Операция деления завершена
divideNumber('dfjjdjd', 1); // Результат деления не яв-я числом



/////////////
// Пользовательские ошибки
// Создание пользовательской ошибки

class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным
        // сообщением
        this.name = 'CustomError'; // установка имени ошибки
    }
}

function validateNumber(value) {
    if(typeof value !== 'number'){
        throw new CustomError('Значение дб численным'); // выбрасывание пользовательской
        // ошибки с сообщением
    }
    console.log('Валидация успешна');
}

try {
    validateNumber('42'); // проверка на число с передачей строки вместо числа
} catch (error){
    if(error instanceof CustomError) { // проверка, яв-я ли ошибка экземпляром 
        // пользовательской ошибки
        console.error('Ошибка', error.message); // Вывод сообщения об ошибке
        console.log('Тип ошибки', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка', error); // вывод сообщения об ошибке по умолчанию
    }
}