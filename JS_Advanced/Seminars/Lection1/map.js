// Map 
// Maр - коллекция ключ/значение, как объект. Отличие от объектов: Map позволяет
// в качестве ключей использовать ключи любого типа

// new Map() - создает коллекцию
let map = new Map();
// map.set(key, value) - создает запись
// map.get(key) - возвращает значения по ключу
// map.has(key) - возвращает true, если ключ есть в коллекции
// map.delete(key) - удаляет элемент по ключу key
// map.clear() - очищает коллекцию от всех элементов
// map.size - возвращает текущее число элементов

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1"); // булево значение как ключ

console.log(map);

// обычный объект Object приводит ключи к строкам
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3

// get set

// создать сразу несколько переменных
let map1 = new Map();
map.set("1", "we")
    .set(1, "likes")
    .set(true, "JS");
console.log(map);


// Перебор коллекции Map
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);
console.log(recipeMap);
// перебор по ключам (овоши)
for(let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}
// перебор по значениям (числа) 
for(let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for(let entry of recipeMap){ // то же самое, что и recipeMap.entries()
    console.log(entry);
}
// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500 и т.д.
})

////////////////////////////////
// Работа с объектами
// Object.entries поможет создать Map
let map3 = new Map(Object.entries(obj));
// Object.fromEntries поможет создать объект из Map
let obj = Object.fromEntries(map);


// Методы и свойства коллекций 
// Map и Set
// keys() - возвращает итерируемый объект по ключам
// values() - возвращает итерируемый объект по значения
// entries() - возвращает итерируемый объект по парам вида [ключ, значение], этот вариант 
// используется по умолчанию в for(..of..)
// forEach() - итератор, работающий так же, как и с массивом