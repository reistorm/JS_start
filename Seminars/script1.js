function helloName(name) {
    console.log(name);
}
helloName('Alex');



let count = 5;
function counter() {
    return count++;
}
counter();
counter();
console.log(count);


let age = +(prompt('How old are you?'));
// function upAge() {
//     return age + 5;
// }
// upAge();
const lvlUpAge = () => {
    return age + 5;
    
}
console.log(`After 5 year you will be ${lvlUpAge()}`);


function hello() {
    console.log('object');
}
hello();


const sum = (a, b) => {
    return a + b;
}
const result = sum(4, 3);
console.log(result);
console.log(sum(4, 5));



const salary = (money) => {
    money = money * 0.87;
    return money * 0.75;
}
const userMoney = +(prompt('Money?'));
let moneyMonth = salary(userMoney);

console.log(`Для расходов можно использовать: salary(userMoney)`);
console.log(`На еду потратить не более ${moneyMonth * 0.3}`);


// минус стрелочной функции: функцию нельзя вызвать раньше объявления переменной

sayHello(); 
hello2();
function sayHello() {
    alert('Hello');
}

const hello2 = () => {
    alert('Hello 2');    
}


function sayHello2() {
    alert('Hello');
    alert('You click on button');
}



let userAnswer = prompt('Зимой и летом одним цветом');
if (userAnswer === 'Елка') {
    console.log(YES);
}
else {
    console.log(NO);
}

let userAnswer2 = prompt('Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает');
if (userAnswer2 === 'Лук') {
    console.log(YES);
}
else {
    console.log(NO);
}

// сделать из загадок функцию

function askQuestion (answer, question) {
    let userAnswer = prompt(question);
    if (userAnswer.toLowerCase === answer) {
        console.log(YES);
    }
    else {
        console.log(NO);
    }
}

askQuestion('лук', 'Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает');
askQuestion('елка', 'Зимой и летом одним цветом');


function puzzle() {
    askQuestion('лук', 'Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом');
}