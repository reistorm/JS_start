// Опциональная цепочка вызовов, которая позволяет избежать генерации ошибок при 
// несуществующем элементе цепочки объекта

// Объект с инф-ией о пользователе
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main Str'
    },
    contacts: {
        email: 'john123@example.com',
        phone: '+123456789',
    }
};

// опциональная цепочка вызовов методов
const email = user?.contacts?.email;
console.log(email); // john123@example.com

// Если значение не определено или равно null/undefined, используеся значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // выводит Default Value, т.к. свойство 'otherValue' не существует
// в объекте user

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName); // 123 Main Str