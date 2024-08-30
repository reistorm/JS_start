const createCount = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
console.log(counter); // не знает, что такое, но клики считает

// Создаем счетчик
const counter1 = createCount();
counter1(); // 1
counter1(); // 2


// Создадим еще один счетчик - они работают независимо друг от друга
// т.о. образом можно делать несколько счетчиков одновременно
const counter3 = createCount();
counter3(); // 1
counter3(); // 3

// другой пример с передачей значения - функция возведения степени числа

const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}

const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
// если значение такое было, то возвращает быстрее и меньше использует ресурсы компа
chachedPow(2); // 4