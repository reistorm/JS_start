// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно
// итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет
// свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен
// перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода
// их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
const musicCollection = [
    {
        title: "X",
        artist: "Fred",
        year: "1985"
    },
    {
        title: "T",
        artist: "Buddy",
        year: "1998"
    },
    {
        title: "R",
        artist: "Fox",
        year: "1984"
    },
    {
        title: "W",
        artist: "Cat",
        year: "2012"
    }
];

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        length: this.length,
        next() {
            return this.current < this.length ? { done: false, value: musicCollection[this.current++]}
            : { done: true};
        }
    }
}

for(let album of musicCollection) {
    console.log(`Название альбома: ${album.title} - Исполнитель: ${album.artist}, Год выпуска: ${album.year}`);
}