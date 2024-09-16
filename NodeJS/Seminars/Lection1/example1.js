const numArray = [1, 2, 4, 5, 8, 9];
const sum = numArray.reduce((acc, number) => acc += number, 0);
console.log('Результат сложения массива:', sum);