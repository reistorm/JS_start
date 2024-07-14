// Задание 1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
//}
//or
// array.forEach(element => {
//     console.log(element);
// });


// const array = ['rei', 'kei', 'mei', 8, 93];
// console.log(array.length);



// const arr1 = ['a', 'b', 'c'];
// arr1[0] = 1;
// arr1[1] = -2;
// arr1[2] = -3;
// console.log(arr1);

// or
// const array_1 = ['a', 'b', 'c'];
// let j = 1;
// for (let i = 0; i < array_1.length; i++) {
//     array_1[i] = j++;
// }
// console.log(array_1);


// function getArray(sizeArray) {
//     const array_2 = [];
//     for (let i = 0; i < sizeArray.length; i++) {
//         array_2.push(Math.round(Math.random() * 10));
//     }
//     console.log(array_2);
// }


// Задание 2
// const array_3 = [1, 2, 3];
// for (let i = 0; i < array_3.length; i++) {
//     array_3[i]++;
// }
// console.log(array_3);

// const array_4 = [];
// array_4[3] = 'a';
// array_4[8] = 'b';
// console.log(array_4.length);

// const array_7 = [1, 2, 3];
// array_7.push(4, 5);
// console.log(array_7);


// const array_8 = ['rei', 'kei', 'mei', 8, 93];
// console.log(array_8.slice(0, 3).length);


// Задание 3

// const array_9 = [];
// for (let i = 0; i < 22; i++) {
//     array_9[0] = 11;
//     array_9[i+1] = array_9[i] + 1;
    
// }
// console.log(array_9);

// const array_10 = [];
// for (let i = 0; i < 49; i++) {
//     array_9[0] = 1;
//     array_9[i+1] = array_9[i] + 2;
    
// }
// console.log(array_9);

// const array_11 = [];
// for (let i = 0; i < 100; i++) {
//     array_11[0] = 0;
//     array_11[i+1] = array_11[i] + 1;
    
// }
// console.log(array_11.reverse());

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let num = 15;
// let count = 0;
// do {
//     num = num * 3;
//     count += 1;
// } while (num < 1000) {
//     console.log(count);
// }

// С помощью вложенных циклов вывести в консоль
// 11 12 13
// 21 22 23
// 31 32 33


// for (let i = 1; i <= 3; i++) {
//     let row = '';
//     for (let j = 1; j <= 3; j++) {
//         row += `${i}${j} `;
//     }
//     console.log(row.trim());
// }
// trim - удаляет пробелы до и после строки

// Задание 4

const array_13 = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < array_13.length; i++) {
//     if (array_13[i] > 3 && array_13[i] < 10) {
//         console.log(array_13[i]);
//     }
// }
// or
// const array_16 = [2, 5, 9, 15, 1, 4];
// array_16.forEach(item =>{
//     if (item > 3 && item < 10){
//         console.log(item);
//     }
// });


// let num = 0;
// for (let i = 2; i < 100; i += 2) {
//         num = num + i
// }
// console.log(num);

// метод reduce console.log(array.reduce((a, b) => a + b));
// const array_14 = [2, 5, 9, 3, 1, 4];
// let sum1 = 0;
// for (let i = 0; i < array_14.length; i++) {
//     sum1 += array_14[i];
// }
// console.log(sum1);

let res = '';
for (let i = 1; i <= 9; i++) {
    res += '-' + String(i);
}
console.log(res + '-');

const array_15 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < array_15.length; i++) {
   if(array_15[i] === 0) {
    break;
   }
   console.log(array_15[i]);
}

