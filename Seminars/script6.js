// задание 1


function getData (name, firstName, age) {
    alert(`Привет ${name} ${firstName} с возрастом ${age}`)
}

console.log(getData('Иван', 'Петров', '17'));
// или
function greeting(name, surName, age) {
    alert(`Привет ${name} ${surName} с возрастом ${age}`)
}
let name = prompt('Enter name');
let surName = prompt('Enter surname');
let age = prompt('Enter age');
greeting(name, surName, age)



function raisingNumberToAPower (number) {
    return number * number; // number ** 2
}
let number = +prompt('Введите число');
console.log(raisingNumberToAPower(number));
// или
const raisingNumberToAPower = (number) => number ** 2;



function chekingNumberForValue(num) {
    (num > 0) ? '+++' : '---';
}
let num = +prompt('Введите число');
console.log(chekingNumberForValue(num));

// или

const checker = (num) => {
    (num > 0) ? '+++' : '---';
}




// задание 2 (40минут)

function sumNumber(num1, num2, num3) {
    return sum = num1 + num2 + num3;
}
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
let num3 = +prompt('Введите число');

console.log(sumNumber(num1, num2, num3));

function sumParam(param1, param2, param3) {
    return sum = param1 + param2 + param3;
}
let param1 = '1';
let param2 = 2;
let param3 = 3;

console.log(sumParam(param1, param2, param3));


function func(num = 5) {
    console.log(num * num);
}

alert(func(2)); // 4
alert(func(3)); // 9
alert(func(0)); // 0


// Задание 3

function sumNum(a, b) {
    return Math.sqrt(a) + Math.sqrt(b);
}
let a = +prompt('a = ');
let b = +prompt('b = ');

alert(sumNum(a, b));

const sumNumberRoot = (a1, b1) => {
    return Math.sqrt(a1) + Math.sqrt(b1);
}
let a1 = +prompt('a = ');
let b1 = +prompt('b = ');
alert(sumNumberRoot(a1, b1));



function findMin(c, d) {
    if (c > d) {
        console.log(`${d} - min number`);
    } else {
        console.log(`${c} - min number`);
    }
}
let c = +prompt('c = ');
let d = +prompt('d = ');
alert(findMin(c, d));
or
let min = (number1, number2) => number1 < number2 ? number1 : number2;
let number1 = +prompt('number1 = ');
let number2 = +prompt('number2 = ');
console.log(min(number1, number2));

// Задание 4 (1`19``)
function dayOfTheWeek (day) {
    if (day === 1) {
        alert('Monday');
    } else if (day === 2) {
        alert('Tuesday');
    } else if (day === 2) {
        alert('Wednesday');
    } else if (day === 2) {
        alert('Thursday');
    } else if (day === 2) {
        alert('Friday');
    } else if (day === 2) {
        alert('Saturday');
    } else if (day === 2) {
        alert('Sunday');
    }
}
let day = +prompt('Введите число соответствующее дню недели');
console.log(dayOfTheWeek(day));


let dayOfWeek = +prompt('Введите число от 1 до 7: ', 1);
function getNameOfDayOfWeek(day) {
    if(isNaN(day) || day < 1 || day > 7) {
        alert('Неверные данные');
    } else {
        const nameOfDayWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
        return nameOfDayWeek[day - 1];
    }
}
alert(`Вы указали ${getNameOfDayOfWeek(dayOfWeek)}`);

function greetingsName(nameGretting, time) {
    let currentTime = time.getHours();
    let greeting = "";
    if(currentTime > 6 && currentTime < 12) {
        greeting = "morning";
    } else if(currentTime > 12 && currentTime < 18) {
        greeting = "day";
    } else if(currentTime > 18 && currentTime < 24) {
        greeting = "evening";
    } else if(currentTime > 0 && currentTime < 6) {
        greeting = "night";
    }
    mes = `Good ${greeting}, ${nameGretting}`;
    return mes;
}
console.log(greetingsName('Eliza', new Date()));


const timeGreeting = (name1, time) => {
    let hour = time.getHours();
    let greetings = "";
    if (hour >= 6 && hour <= 10) {
        greetings = "morning";
    } else if (hour >= 11 && hour <= 16) {
        greetings = "day";
    } else if (hour >= 17 && hour <= 22) {
        greetings = "evening";
    } else {
        greetings = "night";
    }
    message = `Good ${greetings}, ${name1}`;
    return message;
}

console.log(timeGreeting('Eliza', new Date()));


//Задача 5

function AskPuzzle(puzzle, answer) {
    let answerUser;
    do {
        answerUser = prompt(`${puzzle}`).toLowerCase();
        if (answerUser != answer) {
            alert('Даю подсказку. Это не фрукт');
        } else {
            alert('Молодец');
        }
    } while (answerUser != answer);
}
AskPuzzle("Зимой и летом одним цветом", "елка");