// Задание 1

// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый 
// массив, содержащий все элементы из обоих массивов. Используйте spread
// оператор для объединения массивов. mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]
const array1 = [2, 3, 5, 8];
const array2 = [7, 5, 6, 2];

function mergeArrays() {
    const bothArray1 = [...array1, ...array2];
    console.log(bothArray1);
};
mergeArrays();

// решение преподавателя
// const mergeArrays1 = (array4, array5) => [...array4, ...array5];
// console.log(mergeArrays1([1, 2, 3], [1, 2, 3]));
// mergeArrays1();

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

const array3 = [1, 2, 3, 2, 4, 1, 5];
function removeDuplicates() {
    const array = [...array3];
    return array.filter((element, index) => index === array.indexOf(element));
    
}
console.log(removeDuplicates(array3));

// решение преподавателя
function removeDuplicates1(...args) {
    return args.filter((val, index) => args.indexOf(val) === index);
    // как работает indexOf
    // "Синий кит".indexOf("Синий"); // вернёт  0
    // так как идет сравнение с индексом первого вхождения значения, то вернет value
}
console.log(removeDuplicates1(1, 2, 1, 2, 3, 4, 5, 5));
// короткая запись
const removeDuplicates2 = (...args) => args.filter((val, index) => args.indexOf(val) === index);
console.log(removeDuplicates2(1, 2, 1, 2, 3, 4, 5, 5 ));

// Задание 2 (Чистые функции 25минут)

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
const getEvenNumbers = (num) => num.filter(item => item % 2 === 0);
console.log(getEvenNumbers([1, 2, 3, 5, 8, 9, 25, 24]));
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
const calculateAverage = (num) => {
    const sum = num.reduce((acc, item) => acc + item, 0);
    return sum / num.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const capitalizeFirstLetter = (str) => {
    // split(' ') - разбил слова 
    // map - массив слов
    // chatAt - обращение к первому символу слова
    // slice - копирование слова с 1 индекса до конца
    // join - объединить Букву в верхнем регистре и окончание слова
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
     
}
console.log(capitalizeFirstLetter('When your hide'));

// Задание 3 (Замыкания 20 минут) 
// 1. Напишите функцию createCalculator, которая принимает начальное значение и 
// возвращает объект с двумя методами: add и subtract. Метод add должен 
// увеличивать значение на переданное число, а метод subtract должен уменьшать 
// значение на переданное число. Значение должно быть доступно только через 
// методы объекта, а не напрямую.


function createCalculator(initialValue) {
    let value = initialValue;
    return {
        add(number) { // add: function(number)
            value += number;
        },
        subtract(number) { // subtract: function(number)
            value -= number;
        },
        getValue() { // getValue: function()
            return value;
        },
    }
}
const calculator = createCalculator(10);
calculator.add(5);
calculator.subtract(3);
calculator.subtract(5);
console.log(calculator.getValue());

// Задание 4 (Лексический контекст 15 минут) 
// 1. Напишите функцию createGreeting, которая принимает имя пользователя 
// и возвращает функцию, которая будет выводить приветствие с использованием 
// этого имени. 
// Пример использования: const greeting = createGreeting('John'); 
// greeting(); // Ожидаемый результат: "Hello, John!"


function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}
const greeting = createGreeting("John");
greeting();

// Задание 5 (тайминг 15 минут) 
// 1. Задача: Напишите функцию createPasswordChecker, которая принимает 
// допустимую длину пароля в качестве аргумента и возвращает функцию для 
// проверки введенного пароля. Возвращаемая функция должна принимать пароль 
// и возвращать true, если его длина соответствует допустимой, и false 
// в противном случае. 
// Пример использования: 
// const isPasswordValid = createPasswordChecker(8);

// console.log(isPasswordValid('password')); 
// Ожидаемый результат: false 

// console.log(isPasswordValid('secret')); 
// Ожидаемый результат: true


function createPasswordChecker(maxLength) {
    return function(password) {
        if(password.length <= maxLength);
    }
}
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password1'));
console.log(isPasswordValid('secret'));

// Задание 6 (Рекурсия 25 минут) 
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное 
// целое число в качестве аргумента и возвращает сумму его цифр. 
// Пример использования: console.log(sumDigits(123)); 
// Ожидаемый результат: 6 (1 + 2 + 3) 

// console.log(sumDigits(456789)); 
// Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number1) {
    if (number1 < 10) {
        return number1;
    } return number1 % 10 + sumDigits(Math.floor(number1 / 10));
}
console.log(sumDigits(123));
console.log(sumDigits(456789));
