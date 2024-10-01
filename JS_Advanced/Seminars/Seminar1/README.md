Задание 1 (тайминг 20 минут) 
Создать механизм для безопасного добавления метаданных к объектам книг 
с использованием Symbol. 
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги. 
2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных). 
3. Создать объект книги, добавить метаданные и вывести их на консоль.


Задание 2 (тайминг 20 минут) 
Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. 
Каждая итерация должна возвращать следующую книгу из библиотеки. 
1. Создайте объект library, который содержит массив книг и имеет свойство символ 
Symbol.iterator. 
2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать 
книги по порядку. 
3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль. 
Массив книг: 
 const books = [ 
      { title: "1984", author: "George Orwell" },
      { title: "Brave New World", author: "Aldous Huxley" }, 
      { title: New World", author: "Aldous Huxley" }, 
      { title: "Fahrenheit 451", author: "Ray Bradbury" } 
];

Задание 3 (тайминг 15 минут) 
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются 
стандартными массивами, но похожи на них. Однако у таких коллекций нет методов 
массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь 
конвертировать коллекции DOM-элементов в массивы и работать с ними. 
Дан код html: 
<div>Element 1</div> 
<div data-active="true">Element 2</div>
<div>Element 3</div> 
<div data-active="true">Element 4</div> 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
их в массив и фильтрует только те из них, у которых есть атрибут data-active. 
Выведите результат на консоль.