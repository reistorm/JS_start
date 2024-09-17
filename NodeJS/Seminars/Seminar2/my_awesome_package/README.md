# Alex Math Package
Math functions
далее заходим на сайт npmjs.com => регистрируемся => логиниться в npm через консоль
npm login вводим в консоль => вводим на сайте и мы можем публиковать пакет
npm publish вводим в терминале 
на сайте в личном кабинете в Packages увидим созданный пакет



Чтобы установить библиотеку нашего проекта:
создаем новый проект
npm init
npm i alex_math_packages // i=install (но коротко)

в новом файле 
инициализируем переменную
const alexMathPackage = require('alex_math_package');

const addResult = alexMathPackage.add(3, 5);
const subResult = alexMathPackage.add(9, 2);

console.log(addResult);
console.log(subResult);

запускаем файл => функции выполнились