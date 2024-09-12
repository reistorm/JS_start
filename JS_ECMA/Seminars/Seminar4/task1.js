// Задание 1 (тайминг 20 минут) 
// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay (число). Функция должна
// выводить заданное сообщение в консоль через указанную задержку. 
// 2. Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками.
// Например: 
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте сообщение вида 
// "Конец программы" с помощью console.log().

// Ожидаемый результат 
// Сообщение 2
// Сообщение 1
// Сообщение 3
// Конец программы

console.log('Lets start');
function delayedMessage(message, delay) {
    setTimeout(() => { console.log(message); }, delay);
}

delayedMessage("Сообщение 1", 2000);
delayedMessage("Сообщение 2", 1000);
delayedMessage("Сообщение 3", 3000);
console.log('Конец программы');
