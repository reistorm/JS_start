// SET
// Set - множество значений (без ключей), где каждое значение может появляться только 
// 1 раз

// new Set(iterable) - создает set 
// set.add(value) - добавляет значение, если есть, то возвращает
// set.delete(value) - true - удаляет, если значений было много
// set.has(value) - true - если значений много
// set.clear() - удаляет всё
// set.size - возвращает количество элементов в множестве

let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
]

let uniqueBuddies = new Set(buddies);

console.log(uniqueBuddies);


// перевести обратно в массив
let arr = Array.from(uniqueBuddies);




// Методы и свойства коллекций 
// Map и Set
// keys() - возвращает итерируемый объект по ключам
// values() - возвращает итерируемый объект по значения
// entries() - возвращает итерируемый объект по парам вида [ключ, значение], этот вариант 
// используется по умолчанию в for(..of..)
// forEach() - итератор, работающий так же, как и с массивом