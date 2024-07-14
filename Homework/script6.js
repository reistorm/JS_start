// task1

function numberToPower(number, power) {
    return number ** power;
    // return Math.pow(number, power);
}
let number = +prompt('Введите число');
let power = +prompt('Введите степень числа');
console.log(numberToPower(number, power));
// замечания от преподавателя можно использовать стрелочную функцию 
// или Math.pow()

// task 2

function salaryAmount(salary) {
   let isEmpty = salary === '';
    // проверить на числовое значение
    if (/^\d+$/.test(salary)) {
        return `Размер заработной платы за вычетом налогов равен: ${salary * 0.87}`;
    } else if (isEmpty) {
        return 'Пустой ввод. Введите еще раз'
    } 
    else {
        alert(`${salary} - не число. Введите еще раз`);
    }
}
let salary = prompt('Введите размер заработной платы');
alert(salaryAmount(salary));

// task3
function getMaxOfThreeNumbers(num1, num2, num3) {
    let result = Math.max(num1, num2, num3);
    result = `Максимальное из трех чисел - ${result}` 
    return result;
}
let num1 = +prompt('Введите первое число: ');
let num2 = +prompt('Введите второе число: ');
let num3 = +prompt('Введите третье число: ');
alert(getMaxOfThreeNumbers(num1, num2, num3));

// task4
// замечание от преподавателя: лучше использовать стрелочные функции
function sumNum(a, b) {
    return a + b;
}
function diffNum(a, b) {
    if(a > b) {
        return a - b;
    } else if (a === b) {
        return 0;
    } else {
        return b - a;
    }
}
function multiNum(a, b) {
    return a * b;
}
function divNum(a, b) {
    if(b != 0) {
        return a / b;
    } else {
        console.log("Делить на ноль нельзя");
    }
}

a = +prompt('Введите первое число');
b = +prompt('Введите второе число');
console.log(sumNum(a, b));
console.log(diffNum(a, b));
console.log(multiNum(a, b));
console.log(divNum(a, b));

