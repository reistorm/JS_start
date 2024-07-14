let count = 0;
while (count < 3) {
    console.log('Hello');
    count++;
}
// for лучше использовать 
for (let i = 0; i < 3; i++) {
    console.log('Hello for');
}

for (let j = 0; j <= 2; j++) {
    console.log(j);
}

let pass;
let count1 = 0;
do {
   if (count >= 3) {
    alert('Password is wrong');
   }
   pass = Number(prompt('Enter your pass')); 
   count1++;

} while (pass != 123);

for (let i = 0; i <= 3; i++) {
    
}


// array
const arr = [1, 2, 'hello'];
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length - 1]);


const user = [];
const userName = 'Eliza';
const userAge = 27;
user.push(userName);
user.push(userAge);
console.log(user);

const numbers = [2, 3, 19, 15];
alert(`Запомни цифры ${numbers}`);

console.log(numbers[(numbers.length - 1)]);
console.log(numbers.pop());

// применение pop - найти имя файла из пути
const filePath = "c:/projects/bestProjects/src/images/background-image.png";
const fileName = filePath.split('/').pop();
console.log(fileName);

//pop комбинация с join
const word = 'example';
const arrWord = word.split('');
const upWord = arrWord.pop();
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(''));

// shift - поиск имени диска
const filePath1 = "c:/projects/bestProjects/src/images/background-image.png";
const diskName = filePath1.split('/').shift();
console.log(diskName);

// slice - копирование целого массива или его части

const students = ['Иванов', 'Петров', 'Сидоров']; 
// Попробуем скопировать массив students в новую переменную. 
const students2 = students.slice(); 
// Добавим в новую переменную нового студента. 
students2.push('Белкин'); 
console.log(students); 
// ['Иванов', 'Петров', 'Сидоров'] 
console.log(students2); 
// ['Иванов', 'Петров', 'Сидоров', 'Белкин']

// slice - отрезать часть массива

const students1 = ['Иванов', 'Петров', 'Сидоров', 'Белкин']; 
const firstTwoStudents = students1.slice(0, 2); 
console.log(firstTwoStudents ); // ['Иванов', 'Петров']