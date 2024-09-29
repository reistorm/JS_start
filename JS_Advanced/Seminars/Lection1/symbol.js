const symbol = Symbol(); // объявление

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');


console.log(dog1);
console.log(dog2);

console.log(dog1 === dog2); // false

// не конвертируется 
const dogID = Symbol('dog');
alert(dogID); // TypeError: Cannot convert a Symbol value to a string
console.log(dogID); // Symbol(dog)

// посмотреть описание
console.log(dogID.description); // dog

/////////////

// сочетание символа с объектом
let id = Symbol('dogID');
let buddy = {
    [id]: 'Жучка'
}
console.log(buddy[id]); // Жучка

/////////////

let id3 = Symbol('dogID');
let buddy3 = {
    [id3]: 'Жучка'
}
console.log(buddy3[id3]); // Жучка
// id перезаписался
buddy3[id3] = "Бобик"; 
console.log(buddy3[id3]); // Бобик


// Проблемы, если не использовать Symbol - перезапись идентификатора
let buddy4 = {name: 'Тузик'};
buddy4.id4 = 'Наш идентификатор';
buddy4.id4 = 'Их идентификатор';

console.log(buddy4.id4); // Их идентификатор

// решение
let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Мурка')]: 'Мурка',
    [Symbol('Таракашка')]: 'Таракашка',
    elephant: 'Слон'
}

console.log(buddies); // нет Барсика

let newBuddies = {};
Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том
// числе и символьные + добавляет Барсика
buddies.cat = 'Барсик';

console.log(newBuddies); // нет Барсика


///////////////// Symbol.for //////////////////

// чтение символа из глобального реестра и записываем в переменную

let id5 = Symbol.for("id");

// читаем снова и записываем в другую переменную
let idAgain = Symbol.for("id");

// проверяем один и тот же ?
alert(id5 === idAgain); // true


///////////////// Symbol.keyFor //////////////////
// описание символа по индентификатору

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id
