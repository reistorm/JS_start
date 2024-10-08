// Задание 4 (тайминг 20 минут) 
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто
// из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый
// студент.
// 1. Map: урок => преподаватель 
// let lessons = new Map(); 
// ("Математика", "Смирнов"), 
// ("История", "Иванова")

// 2. Map: студент => Set уроков 

// Проверка: 
// console.log(`Преподаватель по Математике: 
// ${lessons.get("Математика")}`); // Смирнов 
// console.log(`Уроки Ивана: тут вывод уроков Ивана`);

let lessons = new Map(); 
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");

const ivanLessons = new Set();
ivanLessons.add('Математика')
            .add('История');

const students = new Map();
students.set("Иван", ivanLessons);

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`);
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`);