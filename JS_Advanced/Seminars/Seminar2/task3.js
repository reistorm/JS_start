// Задание 3 (тайминг 15 минут)
// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить,
// является ли введенное значение числом или нет, и дать соответствующий ответ.
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
// 2. Добавьте место (например, div) для вывода сообщения пользователю.
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку.
// Эта функция должна использовать try и catch для проверки вводимого значения.

const comment = document.querySelector('.comment');
const button = document.querySelector('button');
const number = document.querySelector('.number');
button.addEventListener('click', function (e) {
    try {
        const inputElement = number.value;
        if(isNaN(inputElement)) {
            throw new Error('Вы ввели не число');
        }
        comment.textContent = 'Ввели число';
    } catch (error) {
        comment.textContent = error.message;
    }
})