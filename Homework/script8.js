// Задание 1

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    }
    else if (i % 2 != 0) {
        console.log(`${i} - нечетное число`);
    }
}

// Задание 2

const numbers = [1, 2, 3, 4, 5, 6, 7];
let numbers1 = numbers.slice(0, 3);
let numbers2 = numbers.slice(5, 7);
let numbers3 = numbers1.concat(numbers2);
console.log(numbers3);
// delete numbers[3];
// delete numbers[4];
console.log(numbers);

// Задание 3

const array = [];
array.length = 5;
let sum = 0;
for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(Math.random() * 9);
    sum += array[i];
    if (array[i] === 3) {
        console.log(`В массиве есть число: ${array[i]}`);
    }  
    console.log(Math.min.apply(null, array));
}
console.log(array);
console.log(sum);

// Задание 4

let hill = '';
for (let i = 0; i < 20; i++) {
    hill += '+';
    console.log(hill);
}

